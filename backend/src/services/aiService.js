const { ChatOpenAI } = require('@langchain/openai');
const { AIMessage, HumanMessage, SystemMessage } = require('@langchain/core/messages');
const { randomUUID } = require('node:crypto');
const aiChatSessionModel = require('../models/aiChatSession.js');

const chatModel = new ChatOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  temperature: 0.2,
  maxTokens: 180,
  timeout: 8000,
});

const MAX_STORED_MESSAGES = 8;

function toText(content) {
  if (typeof content === 'string') {
    return content;
  }

  if (Array.isArray(content)) {
    return content
      .map((part) => {
        if (typeof part === 'string') {
          return part;
        }

        if (part && typeof part === 'object' && 'text' in part) {
          return part.text;
        }

        return '';
      })
      .join('')
      .trim();
  }

  return '';
}

function normalizeHistory(history) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter((item) => item && typeof item.content === 'string')
    .slice(-6)
    .map((item) => {
      if (item.role === 'assistant') {
        return new AIMessage(item.content);
      }

      return new HumanMessage(item.content);
    });
}

async function getSession(sessionId) {
  if (!sessionId) {
    return null;
  }

  return aiChatSessionModel.findOne({ sessionId }).lean();
}

async function persistSession(sessionId, userMessage, assistantMessage) {
  const existingSession = await aiChatSessionModel.findOne({ sessionId });
  const currentMessages = existingSession?.messages || [];
  const nextMessages = [
    ...currentMessages,
    { role: 'user', content: userMessage },
    { role: 'assistant', content: assistantMessage },
  ].slice(-MAX_STORED_MESSAGES);

  await aiChatSessionModel.findOneAndUpdate(
    { sessionId },
    { sessionId, messages: nextMessages },
    { upsert: true, new: true }
  );

  return nextMessages;
}

async function generateChatReply({ message, history = [], sessionId }) {
  const trimmedMessage = String(message || '').trim();
  const normalizedSessionId = String(sessionId || '').trim() || randomUUID();

  if (!trimmedMessage) {
    const error = new Error('Message is required');
    error.statusCode = 400;
    throw error;
  }

  const storedSession = await getSession(normalizedSessionId);
  const sessionHistory = storedSession?.messages?.length
    ? storedSession.messages
    : history;

  const messages = [
    new SystemMessage(
      'You are a fast, helpful Valorant assistant. Keep answers short, practical, and direct. Avoid long explanations unless asked. If the user asks about the project, answer as a web app assistant.'
    ),
    ...normalizeHistory(sessionHistory),
    new HumanMessage(trimmedMessage),
  ];

  const response = await chatModel.invoke(messages);
  const reply = toText(response.content);

  await persistSession(normalizedSessionId, trimmedMessage, reply);

  return {
    reply,
    sessionId: normalizedSessionId,
    model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
  };
}

module.exports = {
  generateChatReply,
};
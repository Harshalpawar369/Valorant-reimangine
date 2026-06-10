const { generateChatReply } = require('../services/aiService.js');

async function chat(req, res) {
  try {
    const { message, history, sessionId } = req.body;
    const result = await generateChatReply({ message, history, sessionId });

    if (!req.body.sessionId && result.sessionId) {
      res.cookie('aiSessionId', result.sessionId, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24,
      });
    }

    return res.status(200).json({
      message: result.reply,
      sessionId: result.sessionId,
      model: result.model,
    });
  } catch (error) {
    const statusCode = error.statusCode || 500;

    return res.status(statusCode).json({
      message:
        statusCode === 400
          ? error.message
          : 'AI service is unavailable right now',
    });
  }
}

module.exports = {
  chat,
};
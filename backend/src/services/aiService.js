const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});



const { ChatOpenAI } = require("@langchain/openai");
const {
  HumanMessage,
  AIMessage,
  SystemMessage,
} = require("@langchain/core/messages");


const model = new ChatOpenAI({
  model: "gpt-4o",
  temperature: 0.2,
  apiKey: process.env.OPENAI_API_KEY,
});



const userMemories = new Map();

const getUserMemory = (userId) => {
  if (!userMemories.has(userId)) {
    userMemories.set(userId, [
      new SystemMessage(
        "You are a helpful AI assistant."
      ),
    ]);
  }

  return userMemories.get(userId);
};




async function chat(userId, userInput) {
  try {

    const memory = getUserMemory(userId);
    
    memory.push(new HumanMessage(userInput));


    const response = await model.invoke(memory);


    memory.push(new AIMessage(response.content));

    if (memory.length > 21) {
      memory.splice(1, memory.length - 21);
    }

    return response.content;
  } catch (error) {
    console.error("Error:", error.message);
  }
}

module.exports = {
  chat,
};
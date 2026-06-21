const { chat } = require("../services/aiService");

const chatController = async (req, res) => {
  try {
    const { userInput } = req.body;

    const userId = req._id;

    const response = await askAI(
      userId,
      userInput
    );

    return res.status(200).json({
      success: true,
      response,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  chatController,
};
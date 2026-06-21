async function askAiMiddleware(req, res, next) {
  try {
    const { userInput } = req.body;

    if (!userInput) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    if (typeof userInput !== "string") {
      return res.status(400).json({
        success: false,
        message: "Message must be a string",
      });
    }

    if (userInput.trim().length < 1) {
      return res.status(400).json({
        success: false,
        message: "Message cannot be empty",
      });
    }

 

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  askAiMiddleware,
};
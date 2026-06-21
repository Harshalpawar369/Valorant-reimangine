const express = require("express");

const router = express.Router();

const {userMiddleware,} = require("../middleware/userMiddleware");

const { askAiMiddleware } = require("../middleware/aiMiddleware");

const {  chatController } = require("../controllers/aiControllers");

router.post(
  "/ai",
  userMiddleware,
  askAiMiddleware,
chatController,
);

module.exports = router;

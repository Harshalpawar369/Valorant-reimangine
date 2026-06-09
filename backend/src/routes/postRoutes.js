const express = require("express")
const multer = require('multer');
const postController = require('../controllers/postControllers.js');
const userMiddleware = require('../middleware/userMiddleware.js')

const upload = multer({
    storage: multer.memoryStorage()
})

const router = express.Router();

router.get('/post',postController.getPosts)
router.post('/post', userMiddleware.userMiddleware, upload.array("image", 5),postController.createPost)

module.exports = router;
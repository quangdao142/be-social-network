const express = require('express')
const router = express.Router();
const PostController = require('../../services/post.service')
const multer = require('multer');

const authMiddleware = require("../../middlewares/auth.middleware")

router.route("/post").post(authMiddleware, PostController.post)
router.route("/get-post").get(authMiddleware, PostController.getPost)
router.route("/get-post-by-user").get(authMiddleware, PostController.getPostByUser)
router.route("/post/:id").delete(authMiddleware, PostController.deletePost)

module.exports = router
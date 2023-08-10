const express = require('express')
const router = express.Router();
const PostController = require('../../controller/api/post.controller')

router.route("/post").post(PostController.Post)
router.route("/getpost").get(PostController.getPost)
router.route("/getpostbyuser").get(PostController.getPostbyUser)
router.route("/post/:id").delete(PostController.deletePost)

module.exports = router

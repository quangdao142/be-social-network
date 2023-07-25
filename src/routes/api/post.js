const express = require('express')
const router = express.Router();
const PostController = require('../../controller/api/post.controller')

router.route("/post").post(PostController.Post)

module.exports = router

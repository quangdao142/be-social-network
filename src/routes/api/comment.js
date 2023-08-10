const express = require('express')
const router = express.Router();
const CommentController = require('../../controller/api/comment.controller')

router.route("/comment").post(CommentController.Comment)
router.route("/comment").get(CommentController.getComment)

module.exports = router

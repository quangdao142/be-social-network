const express = require('express')
const router = express.Router();
const CommentController = require('../../services/comment.service')

router.route("/comment").post(CommentController.comment)
router.route("/comment").get(CommentController.getComment)
router.route("/comment/:id").delete(CommentController.deleteComment)

module.exports = router

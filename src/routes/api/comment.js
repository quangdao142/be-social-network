const express = require('express')
const router = express.Router();
const CommentController = require('../../controller/api/comment.controller')

router.route("/comment").post(CommentController.comment)
router.route("/comment").get(CommentController.getComment)
router.route("/comment/:id").delete(CommentController.deleteComment)

module.exports = router

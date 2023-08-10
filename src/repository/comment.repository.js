const CommentModel = require('../models/Comment')

const addComment = (payload) => {
  if (payload._id != null) {
    return CommentModel.findByIdAndUpdate({ _id: payload._id }, {
      postId: payload.postId,
      fullname: payload.fullname,
      username: payload.username,
      content: payload.content
    })
  }
  return CommentModel.create({
    postId: payload.postId,
    fullname: payload.fullname,
    username: payload.username,
    content: payload.content
  })
}

const getComment = () => {
  let data = CommentModel.find()
  return data
}

const deleteComment = (commentId) => {
  return CommentModel.findByIdAndDelete(commentId);
}

module.exports = {
  addComment,
  getComment,
  deleteComment
}

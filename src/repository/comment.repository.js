const db = require('../config/db')
const CommentModel = require('../config/db/Comment')

db.connect()

const addComment = (payload) => {
  return CommentModel.create({
    postId: payload.postId,
    fullname: payload.fullname,
    username: payload.username,
    fullname: payload.fullname,
    content: payload.content
  })
}

const getComment = () => {
  let data = CommentModel.find()
  return data
};

module.exports = {
  addComment,
  getComment
}

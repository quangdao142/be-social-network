const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
    user: String,
    commentId: String,
    content: String
  },{
    collection: 'comments'
  })

const CommentModel = mongoose.model('Comment',Comment)
module.exports = CommentModel
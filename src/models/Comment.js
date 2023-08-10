const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
    postId: ObjectId,
    username: String,
    fullname: String,
    content: String
  },{
    collection: 'comments'
  })

const CommentModel = mongoose.model('Comment',Comment)
module.exports = CommentModel
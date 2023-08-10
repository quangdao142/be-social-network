const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    username: String,
    fullname: String,
    postId: String,
    content: String,
    imglink: String,
    tag: String,
    like: String,
  },{
    collection: 'posts',
    timestamps: true,
  })

const PostModel = mongoose.model('Post',Post)
module.exports = PostModel
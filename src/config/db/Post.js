const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
    username: String,
    postId: String,
    content: String,
    imglink: String,
    tag: String,
    like: String
  },{
    collection: 'posts'
  })

const PostModel = mongoose.model('Post',Post)
module.exports = PostModel
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chat = new Schema({
    usersend: String,
    content: String,
    userreceive: String
  },{
    collection: 'chats'
  })

const ChatModel = mongoose.model('Chat',Chat)
module.exports = ChatModel
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Chat = new Schema({
    senderId: String,
    message: String,
    conversationId: String
  },{
    collection: 'chats',
    timestamps: true,
  })

const ChatModel = mongoose.model('Chat',Chat)
module.exports = ChatModel
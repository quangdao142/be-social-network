const { ObjectId } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Message = new Schema({
    senderId: ObjectId,
    message: String,
    conversationId: ObjectId
  },{
    collection: 'message',
    timestamps: true,
  })

const MessageModel = mongoose.model('Message',Message)
module.exports = MessageModel
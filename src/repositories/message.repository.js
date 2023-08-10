const MessageModel = require("../models/message.model");

const createMessage = async (conversationId, message, senderId) => {
    const chat = new MessageModel({ conversationId, message, senderId });
    await chat.save();
    return chat;
  };
  
  const getMessagesByConversationId = async (conversationId) => {
    const messages = await MessageModel.find({ conversationId });
    return messages;
  };
  
  const deleteMessageById = async (messageId) => {
    const message = await MessageModel.findByIdAndDelete(messageId);
    return message;
  };
  
  module.exports = {
    createMessage,
    getMessagesByConversationId,
    deleteMessageById
  };
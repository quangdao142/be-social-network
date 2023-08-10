const ConversationModel = require('../models/conversation.model');


const createConversation = async (participants) => {
    let conversation;
    conversation = await ConversationModel.findOne({ "participants": { "$size": 2, "$all": [...participants] } });

    if (conversation) {
        return conversation;
    }
    conversation = new ConversationModel({ participants });

    await conversation.save();
    return conversation;
};

const getConversationById = async (conversationId) => {
    const conversation = await ConversationModel.findById(conversationId).populate('participants').populate('messages');
    return conversation;
};

const getConversationsByUserId = async (userId) => {
    const conversations = await ConversationModel.find({ participants: userId }).populate('participants').populate('messages');
    return conversations;
};

const addMessageToConversation = async (conversationId, message) => {
    const conversation = await ConversationModel.findById(conversationId);
    conversation.messages.push(message);
    await conversation.save();
    return conversation;
};

const deleteConversationById = async (conversationId) => {
    const conversation = await ConversationModel.findByIdAndDelete(conversationId);
    return conversation;
};

module.exports = {
    createConversation,
    getConversationById,
    getConversationsByUserId,
    addMessageToConversation,
    deleteConversationById
};
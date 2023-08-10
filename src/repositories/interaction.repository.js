const InteractionModel = require('../models/interaction.model');

const addInteraction = (payload) => {
  if (payload._id != null) {
    return InteractionModel.findByIdAndUpdate({ _id: payload._id }, {
      userId: payload.userId,
      postId: payload.postId,
      interactionType: payload.interactionType
    });
  }
  return InteractionModel.create({
    userId: payload.userId,
    postId: payload.postId,
    interactionType: payload.interactionType
  });
};

const getInteractions = () => {
  return InteractionModel.find();
};

const getInteractionById = (interactionId) => {
  return InteractionModel.findById(interactionId);
};

const updateInteraction = (interactionId, payload) => {
  return InteractionModel.findByIdAndUpdate(interactionId, {
    userId: payload.userId,
    postId: payload.postId,
    interactionType: payload.interactionType
  }, { new: true });
};

const deleteInteraction = (interactionId) => {
  return InteractionModel.findByIdAndDelete(interactionId);
};

module.exports = {
  addInteraction,
  getInteractions,
  getInteractionById,
  updateInteraction,
  deleteInteraction
};
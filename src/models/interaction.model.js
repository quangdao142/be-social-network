const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const InteractionType = require('../consts/InteractionType.const');
const Schema = mongoose.Schema;

const Interaction = new Schema(
  {
    userId: ObjectId,
    postId: ObjectId,
    interactionType: InteractionType
  },
  {
    collection: "interaction",
    timestamps: true,
  }
);

const InteractionModel = mongoose.model("Interaction", Interaction);
module.exports = InteractionModel;

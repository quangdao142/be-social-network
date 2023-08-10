const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Rating = new Schema({
    username: String,
    tag: String,
    rating: String
  },{
    collection: 'ratings',
    timestamps: true,
  })

const RatingModel = mongoose.model('Rating',Rating)
module.exports = RatingModel
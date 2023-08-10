const mongoose = require('mongoose')
const {ObjectId} = require('mongodb')
const Schema = mongoose.Schema

const Interest = new Schema({
    userId: ObjectId, tag: String, interactPoint: Number
}, {
    collection: 'interests'
})

const InterestModel = mongoose.model('InterestModel', Interest)
module.exports = InterestModel
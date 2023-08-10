const InterestModel = require('../models/Interest')

const addTags = (userId, tags) => {
    let interests = [];
    tags.forEach(tag => {
        interests.push(new InterestModel({
            userId: userId, tag: tag, interactPoint: 0
        }))
    })
    return InterestModel.bulkSave(interests);
}

const increaseInteractPoint = (userId, tag) => {
    return InterestModel.findOneAndUpdate({"userId": userId, "tag": tag}, {$inc: {"interactPoint": 1}})
}

module.exports = {
    addTags, increaseInteractPoint
}
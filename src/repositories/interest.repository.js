const InterestModel = require('../models/interest.model')

const addTags = (userId, tags) => {
    return InterestModel.updateMany({
        "userId": userId, "tag": {$in: tags},
    }, {
        $inc: {"interactPoint": 1}
    });
}

const increaseInteractPoint = (userId, tags) => {
    return InterestModel.updateMany({
        "userId": userId, "tag": {$in: tags}
    }, {$inc: {"interactPoint": 1}})
}

module.exports = {
    addTags, increaseInteractPoint
}
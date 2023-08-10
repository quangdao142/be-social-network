const interestRepository = require("../repository/interest.repository");

const addTags = (userId, tags) => {
    try {
        return interestRepository.addTags(userId, tags);
    } catch (error) {
        return error;
    }
}

const increaseInteractPoint = (interestId) => {
    try {
        return interestRepository.increaseInteractPoint(interestId);
    } catch (error) {
        return error;
    }
}

module.exports = {
    addTags, increaseInteractPoint
}
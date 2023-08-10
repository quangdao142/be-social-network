const RatingModel = require("../models/rating.model");

const ratingArray = (payload) => {
  let data = RatingModel.find({
    username: payload.username
  })
  return data;
};

module.exports = {
  ratingArray,
};

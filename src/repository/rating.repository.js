const RatingModel = require("../models/Rating");

const ratingArray = (payload) => {
  let data = RatingModel.find({
    username: payload.username
  })
  return data;
};

module.exports = {
  ratingArray,
};

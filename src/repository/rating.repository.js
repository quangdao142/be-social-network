const db = require("../config/db");
const RatingModel = require("../config/db/Rating");

db.connect();

const ratingArray = (payload) => {
  let data = RatingModel.find({
    username: payload.username
  })
  return data;
};

module.exports = {
  ratingArray,
};

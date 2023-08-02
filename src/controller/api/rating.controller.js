const ratingRepository = require('../../repository/rating.repository')
const Formatter = require('response-format')
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')
const { json } = require('body-parser')

const RatingArray = async (req, res) => {
  try {
    // console.log(req.body)
    let payload = req.body;
    let data = await ratingRepository.ratingArray(payload);
    // const jsonArray = JSON.parse(data);
    let name = data[0]
    console.log(name.rating);
  } catch (error) {
    console.log(error)
    res.json(Formatter.badRequest(error))
  }
}

module.exports = {
  RatingArray
}

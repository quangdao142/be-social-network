const ratingRepository = require('../../repository/rating.repository')
const postRepository = require('../../repository/post.repository')
const Formatter = require('response-format')
const bcrypt =  require('bcrypt')
const jwt = require('jsonwebtoken')
const { json } = require('body-parser')

const RatingArray = async (req, res) => {
  try {
    let payload = req.body;
    let data = await ratingRepository.ratingArray(payload);
    data.sort((a, b) => b.rating - a.rating);
    console.log(data)
    let data2 = await postRepository.postArray(data[0].tag);
    console.log(`Chu de nguoi dung quan tam nhat la: ${data[0].tag}. Danh sach cac bai viet co chu de ${data[0].tag}:`)
    console.log(data2)
  } catch (error) {
    console.log(error)
    res.json(Formatter.badRequest(error))
  }
}

module.exports = {
  RatingArray
}

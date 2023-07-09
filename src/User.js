const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
    fullname: String,
    username: String,
    password: String
  },{
    collection: 'users'
  })

const UserModel = mongoose.model('User',User)
module.exports = UserModel
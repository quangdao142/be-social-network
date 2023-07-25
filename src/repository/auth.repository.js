const db = require('../config/db')
const UserModel = require('../config/db/User')

db.connect()

const login = (payload) => {
  let data = UserModel.findOne({
    username: payload.username,
    password: payload.password
  })
  return data;
}

const checkExist = (username) => {
  return UserModel.findOne({
    username: username
  })
}

const register = (payload) => {
  return UserModel.create({
    fullname: payload.fullname,
    username: payload.username,
    password: payload.password
  })
}

module.exports = {
  login,
  checkExist,
  register
}

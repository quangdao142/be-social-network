const db = require('../config/db')
const UserModel = require('../User')

db.connect()

const login = payload => {
  UserModel.findOne({
    username: payload.username,
    password: payload.password,
  })
}

module.exports = {
  login
}

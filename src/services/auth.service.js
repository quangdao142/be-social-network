const authRepository = require("../repositories/auth.repository");
const Formatter = require("response-format");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("../config/env");

const Login = async (req, res) => {
  try {
    // console.log(req.body)
    let payload = req.body;
    let data = await authRepository.login(payload);
    let user_info = {userId: data._id, fullname: data.fullname, username: data.username};
    // console.log(data)
    // res.json(Formatter.success(null, data))
    let token = jwt.sign(user_info, env.data.JwtSecret);
    console.log(token);
    res.json(Formatter.success(undefined, {token}));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const Register = async (req, res) => {
  try {
    let payload = req.body;
    let findExist = await authRepository.checkExist(payload.username);
    if (findExist) {
      res.json({ error: true, message: "username existed" });
    } else {
      let data = await authRepository.register(payload);
      let user_info = { fullname: data.fullname, username: data.username };
      let token = jwt.sign(user_info, env.data.JwtSecret);
      console.log(token);
      res.json({ token });
      // res.json(Formatter.success(null, data))
    }
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  Login,
  Register,
};

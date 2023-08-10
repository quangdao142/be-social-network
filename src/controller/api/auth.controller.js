const authRepository = require("../../repository/auth.repository");
const Formatter = require("response-format");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    // console.log(req.body)
    let payload = req.body;
    let data = await authRepository.login(payload);
    let user_info = { fullname: data.fullname, username: data.username };
    // console.log(data)
    // res.json(Formatter.success(null, data))
    let token = jwt.sign(user_info, "quangdao");
    console.log(token);
    res.json({ token });
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
      res.json({ error: true, message: "Username da ton tai" });
    } else {
      let data = await authRepository.register(payload);
      let user_info = { fullname: data.fullname, username: data.username };
      let token = jwt.sign(user_info, "quangdao");
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

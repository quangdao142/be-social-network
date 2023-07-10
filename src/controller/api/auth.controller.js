const loginRepository = require('../../repository/auth.repository')
const Formatter = require('response-format')

const Login = async (req, res) => {
  try {
    let payload = req.body;
    let data = await loginRepository.login(payload);
    res.json(Formatter.success(null, data))
  } catch (error) {
    console.log(error)
    res.json(Formatter.badRequest(error))
  }
}

module.exports = {
  Login
}

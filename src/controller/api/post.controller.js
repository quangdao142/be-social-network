const postRepository = require("../../repository/post.repository");
const Formatter = require("response-format");
const jwt = require('jsonwebtoken');

const Post = async (req, res) => {
  try {
    let payload = req.body;
    console.log(payload);
    // payload.username = jwt.verify(req.headers.authorization,'quangdao').username
    let data = await postRepository.post(payload);
    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

module.exports = {
  Post
};

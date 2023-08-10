const commentRepository = require("../../repositories/comment.repository");
const Formatter = require("response-format");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Comment = async (req, res) => {
  try {
    let payload = req.body;
    console.log(payload)
    payload.fullname = jwt.verify(req.headers.authorization, 'quangdao').fullname
    let data = await commentRepository.addComment(payload);
    // res.json(data)
    res.json(Formatter.success(null, data))
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const getComment = async (req, res) => {
  try {
    let comments = await commentRepository.getComment();
    console.log(comments)
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const deletecomment = async (req, res) => {
  try {
    let commentId = req.params.id;
    let comments = await commentRepository.deleteComment(commentId);
    res.json(Formatter.success("Delete comment successfully!", null));
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = {
  Comment,
  getComment
};

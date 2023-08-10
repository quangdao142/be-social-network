const commentRepository = require("../../repository/comment.repository");
const Formatter = require("response-format");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const comment = async (req, res) => {
  try {
    let payload = req.body;
    payload.fullname = req.fullname
    let data = await commentRepository.addComment(payload);
    res.json(Formatter.success(null, data))
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const getComment = async (req, res) => {
  try {
    let comments = await commentRepository.getComment();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}

const deleteComment = async (req, res) => {
  try {
    let commentId = req.params.id;
    await commentRepository.deleteComment(commentId);
    res.json(Formatter.success("Delete comment successfully!", null));
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'Internal server error'});
  }
}

module.exports = {
  comment,
  getComment,
  deleteComment
};

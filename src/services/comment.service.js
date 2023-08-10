const commentRepository = require("../repositories/comment.repository");
const Formatter = require("response-format");

const comment = async (req, res) => {
  try {
    let payload = req.body;
    payload.fullname = req.fullname
    let data = await commentRepository.addComment(payload);
    res.json(Formatter.success(null, data))
  } catch (error) {
    res.json(Formatter.internalError(error));
  }
};

const getComment = async (req, res) => {
  try {
    let comments = await commentRepository.getComment();
    res.json(Formatter.success(comments));
  } catch (error) {
    res.json(Formatter.internalError(error));
  }
}

const deleteComment = async (req, res) => {
  try {
    let commentId = req.params.id;
    await commentRepository.deleteComment(commentId);
    res.json(Formatter.success("Delete comment successfully!", null));
  } catch (error) {
    res.json(Formatter.internalError(error));
  }
}

const getCommentsByPostId = async (req, res) => {
  try {
    let postId = req.params.postId;
    let comments = await commentRepository.findByPostId(postId);
    res.json(Formatter.success(comments));
  } catch (error) {
    res.json(Formatter.internalError(error));
  }
}

module.exports = {
  comment, getComment, deleteComment, getCommentsByPostId
};

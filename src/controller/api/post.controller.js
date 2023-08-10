const postRepository = require("../../repository/post.repository");
const Formatter = require("response-format");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const Post = async (req, res) => {
  try {
    let payload = req.body;

    console.log("req.user: ", req.user)
    payload.username = req.user.username;
    payload.fullname = req.user.fullname;

    if (payload.imglink) {
      payload.imglink = req.body.imglink;
    }

    let data = await postRepository.post(payload);

    res.json(Formatter.success(null, data));
  } catch (error) {
    console.log(error);
    res.json(Formatter.badRequest(error));
  }
};

const getPost = async (req, res) => {
  try {
    let items = await postRepository.getPost();
    let username = items[0].username;
    let postInfo = {
      fullname: await postRepository.getFullname(username),
      items: items,
    };
    res.json(postInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getPostByUser = async (req, res) => {
  try {
    let payload = req.query.username;
    let items = await postRepository.getPostbyUser(payload);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletePost = async (req, res) => {
  try {
    let postId = req.params.id;
    let post = await postRepository.deletePost(postId)
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch {
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  Post,
  getPost,
  getPostByUser,
  deletePost
};

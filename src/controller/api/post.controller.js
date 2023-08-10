const postRepository = require("../../repository/post.repository");
const Formatter = require("response-format");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const Post = async (req, res) => {
  try {
    let payload = req.body;
    console.log(payload);

    const decodedToken = jwt.verify(req.headers.authorization, "quangdao");
    payload.username = decodedToken.username;
    payload.fullname = decodedToken.fullname;

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

const getPostbyUser = async (req, res) => {
  try {
    let payload = req.query.username;
    console.log(payload);
    let items = await postRepository.getPostbyUser(payload);
    console.log(items);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const deletePost = async (req, res) => {
  try{
    let postId = req.params.id;
    let post = await postRepository.deletePost(postId)
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json({ message: 'Post deleted successfully' });
  }catch{
    res.status(500).json({ error: 'Internal server error' });
  }
};


module.exports = {
  Post,
  getPost,
  getPostbyUser,
  deletePost
};

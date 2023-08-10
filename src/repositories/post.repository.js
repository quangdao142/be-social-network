const PostModel = require('../models/post.model')
const UserModel = require('../models/user.model')

const post = (payload) => {
  if (payload._id != null) {
    return PostModel.findByIdAndUpdate({ _id: payload._id }, {
      content: payload.content,
      imglink: payload.imglink,
      tag: payload.tag,
      username: payload.username,
      fullname: payload.fullname,
      like: payload.like
    });
  }
  return PostModel.create({
    content: payload.content,
    imglink: payload.imglink,
    tag: payload.tag,
    username: payload.username,
    fullname: payload.fullname,
    like: payload.like
  })
}

const postArray = (payload) => {
  let data = PostModel.find({
    tag: payload
  })
  return data;
};

const getPost = () => {
  let data = PostModel.find()
  return data
};

const getFullname = (username) => {
  let data = UserModel.find({
    username: username
  })
  return data.fullname
}

const getPostByUser = (username) => {
  let data = PostModel.find({
    username: username
  })
  // console.log(data.items)
  return data
};

const deletePost = (postId) => {
  let data = PostModel.findByIdAndDelete(postId)
  return data
};

module.exports = {
  post,
  postArray,
  getPost,
  getFullname,
  getPostByUser,
  deletePost
}

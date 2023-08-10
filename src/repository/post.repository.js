const db = require('../config/db')
const PostModel = require('../config/db/Post')
const UserModel = require('../config/db/User')


db.connect()

const post = (payload) => {
  return PostModel.create({
    content: payload.content,
    imglink: payload.imglink,
    tag: payload.tag,
    username: payload.username,
    fullname: payload.fullname,
    like:payload.like
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
    username : username
  })
  return data.fullname
}

const getPostbyUser = (username) => {
  let data = PostModel.find({
    username : username
  })
  // console.log(data.items)
  return data
};

const deletePost = (postID) => {
  let data = PostModel.findByIdAndDelete(postId)
  return data
};

module.exports = {
  post,
  postArray,
  getPost,
  getFullname,
  getPostbyUser,
  deletePost
}

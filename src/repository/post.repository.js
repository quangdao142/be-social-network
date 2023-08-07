const db = require('../config/db')
const PostModel = require('../config/db/Post')


db.connect()

const post = (payload) => {
  return PostModel.create({
    content: payload.content,
    imglink: payload.imglink,
    tag: payload.tag,
    username: payload.username,
    like:payload.like
  })
}

const postArray = (payload) => {
  let data = PostModel.find({
    tag: payload
  })
  return data;
};

module.exports = {
  post,
  postArray
}

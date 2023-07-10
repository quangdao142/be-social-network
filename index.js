const express = require("express");
const mongoose = require("mongoose");
const app = express();
const db = require("./src/config/db");
const bodyParser = require("body-parser");
const UserModel = require("./src/User");
db.connect();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(require("./src/routes"))
//sign up
app.post("/signup", (req, res, next) => {
  var fullname = req.body.fullname;
  var username = req.body.username;
  var password = req.body.password;
  UserModel.findOne({
    username: username,
  })
    .then((data) => {
      if (data) {
        res.json("Username da ton tai");
      } else {
        return UserModel.create({
          fullname: fullname,
          username: username,
          password: password,
        });
      }
    })
    .then((data) => {
      res.json("Dang ky tai khoan thanh cong");
    })
    .catch((err) => {
      res.status(500).json("Dang ky tai khoan that bai");
    });
});

//login
app.post("/login", (req, res, next) => {
  var username = req.body.username;
  var password = req.body.password;

  UserModel.findOne({
    username: username,
    password: password,
  })
    .then((data) => {
      if (data) {
        res.json("Dang nhap thanh cong");
      } else {
        res.status(300).json("Dang nhap that bai");
      }
    })
    .catch((err) => {
      res.status(500).json("Co loi database o serve");
    });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

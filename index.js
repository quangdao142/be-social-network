require('dotenv').config()
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const bodyParser = require("body-parser");
const expressjwt = require("express-jwt");
const path = require("path")
const socket = require('socket.io');
const http = require("http");
const env = require('./src/config/env');
const { connectDb } = require('./src/models');
const chatService = require('./src/services/chat.service');

const app = express();

env.loadEnv();

connectDb();
const port = env.data.Port;

app.use(cors())
// app.use("/images", express.static(__dirname + "./src/utils/images"));
app.use("/images", express.static(path.resolve('./src/utils/images')))
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());
app.use(require("./src/routes"))
// app.use(expressjwt({
//   secret: 'quangdao'
// }).unless({
//   path:["/api/login"]
// })
// )

// chatService(server);



const server = app.listen(port, () =>
  console.log(`Server started on ${port}`)
);

chatService(server);
// const io = socket(server, {
//   cors: {
//     origin: "http://localhost:8080",
//     credentials: true,
//   },
// });

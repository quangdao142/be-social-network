const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
const db = require("./src/config/db");
const bodyParser = require("body-parser");
const expressjwt = require("express-jwt");
const path = require("path")
const socketIo = require('socket.io');
const http = require("http");
const server = http.createServer(app);
const io = socketIo(server);

db.connect();
const port = 3000;

app.use(cors())
// app.use("/images", express.static(__dirname + "./src/utils/images"));
app.use("/images",express.static(path.resolve('./src/utils/images')))
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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

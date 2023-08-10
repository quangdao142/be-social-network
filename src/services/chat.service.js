const express = require("express");
const chatRepository = require("../../repository/chat.repository");
const Formatter = require("response-format");
const app = express();
const socketIo = require('socket.io');
const http = require("http");
const server = http.createServer(app);
const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("chat message", (msg) => {
    console.log("Message received:", msg);

    const message = new Message({
      content: msg,
      timestamp: new Date(),
    });

    message.save();

    io.emit("chat message", msg);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

module.exports = {};

const socket = require('socket.io');
const jwt = require('jsonwebtoken');
const MessageModel = require('../models/message.model');
const env = require('../config/env');
const { createMessage } = require('../repositories/message.repository');
const { getConversationById } = require('../repositories/conversation.repository');

module.exports = (server) => {
  const io = socket(server, {
    cors: {
      origin: "http://localhost:8080",
      credentials: true,
    },
  });


  io.use(function (socket, next) {

    if (socket.handshake.auth && socket.handshake.auth.token) {
      const token = socket.handshake.auth.token
      if (!token.startsWith("Bearer")) {
        return next(new Error('Authentication error'));
      }

      jwt.verify(token.replace("Bearer ", ""), env.data.JwtSecret, function (err, decoded) {
        if (err) return next(new Error('Authentication error'));
        socket.decoded = decoded;
        next();
      });
    }
    else {
      next(new Error('Authentication error'));
    }
  }).on('connection', (socket) => {
    console.log('A user connected');

    // Join a room
    socket.on('join', (roomId) => {
      socket.join(roomId);
      socket.to(roomId).emit('user-connected', socket.userId);
      console.log(`User ${socket.userId} joined room ${roomId}`);
    });

    // Leave a room
    socket.on('leave', (roomId) => {
      socket.leave(roomId);
      console.log(`User ${socket.userId} left room ${roomId}`);
    });

    // Send a message
    socket.on('message', async (data) => {
      const { message, conversationId } = data;
      const conversation = await getConversationById(conversationId);
      if (!conversation) {
        io.to(conversationId).emit('error', "Conversation not found");
      } else {
        const savedMessage = await createMessage(conversationId, message, socket.decoded.userId);
        io.to(conversationId).emit('message', savedMessage);
      }
    });

    // Disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
};
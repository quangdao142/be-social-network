const socketio = require('socket.io');
const ChatModel = require('../models/message.model');

module.exports = (server) => {
  const io = socketio(server);

  io.on('connection', (socket) => {
    console.log('A user connected');

    // Join a room
    socket.on('join', (roomId) => {
      socket.join(roomId);
      console.log(`User joined room ${roomId}`);
    });

    // Leave a room
    socket.on('leave', (roomId) => {
      socket.leave(roomId);
      console.log(`User left room ${roomId}`);
    });

    // Send a message
    socket.on('message', async (data) => {
      const { roomId, message, userId } = data;
      const chat = new ChatModel({ roomId, message, userId });
      await chat.save();
      io.to(roomId).emit('message', chat);
    });

    // Disconnect
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
};
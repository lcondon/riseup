module.exports = function(io) {
  io.on('connection', function(socket) {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data) {
      io.emit('RECEIVE_MESSAGE', data);
      console.log(data);
    });

    socket.on('SEND_COMMENT', function(data) {
      io.emit('RECEIVE_COMMENT', data);
      console.log(data);
    });
  });
};

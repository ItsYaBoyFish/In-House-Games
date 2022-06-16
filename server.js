const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(http);


app.use(express.static(path.join(__dirname, 'client')));

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, 'client/html/app.html'));
});




// Have a room for every game, that way you only see the information you want to see for a particular game.

io.on('connection', (socket) => {
   console.log('Connection');

  socket.on('disconnect', () => {
   
  });

  socket.on('room-change', (roomName) => {
      socket.join(roomName);
  });
});


http.listen(3000, function() {
   console.log('listening on *:3000');
});
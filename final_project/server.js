const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);


//Redirects to chat page
app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chat.html');
});

io.on('connection', (socket) => {
  console.log('New user joined the chat');

  socket.on('codeboard-message', (msg) => {
    console.log('message: ' + msg);
  	socket.broadcast.emit('codeboard-message-broadcasted', msg);
  });
  
});

var server_port = process.env.PORT || 3000;
http.listen(server_port, () => {
  console.log("server is up");
});

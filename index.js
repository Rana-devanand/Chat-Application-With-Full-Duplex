const express = require("express");
const app = express();
const http = require('http');
const PORT = 3000;
const socketio = require('socket.io');
 
// Creating Server
const server = http.createServer(app);
const io = socketio(server);

// On Connection
io.on('connection' , (socket) => {
     console.log('User connected id : ' , socket.id);

     socket.on("msg_send", (data) => {
          console.log('Message Recieved : ' , data.message);
          io.emit('msg_recieved' , data);  // emit ->  send a message to all connected clients.
          socket.emit('msg_recieved' , data);  // emit -> send a message for itself not everyone connected to the socket.
          socket.broadcast.emit('msg_recieved' , data);  // emit ->  send a message to all connected clients except the sender.
     })
    
});



// Connectiong Static Html file to serve data from server
app.use('/' , express.static(__dirname + '/Public'));
const setupAndStartServer = () => {
	server.listen(PORT , () => {
		console.log(`Server is running on port ${PORT}`);
	})
}
setupAndStartServer();



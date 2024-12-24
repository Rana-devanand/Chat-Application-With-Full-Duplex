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

     socket.on('disconnect' , () => {
          console.log('User disconnected');
     });

	setInterval(() => {
		socket.emit("from_server");
	}, 3000);
});



// Connectiong Static Html file to serve data from server
app.use('/' , express.static(__dirname + '/Public'));
const setupAndStartServer = () => {
	server.listen(PORT , () => {
		console.log(`Server is running on port ${PORT}`);
	})
}
setupAndStartServer();



const socket = io();

socket.on('from_server', () => {
     console.log('Connected to server');
     const div = document.createElement('div');
     div.innerHTML = 'Data fetched to the server';
     document.body.appendChild(div);
})
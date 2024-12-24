const socket = io();

// socket.on('from_server', () => {
//      console.log('Connected to server');
//      const div = document.createElement('div');
//      div.innerHTML = 'Data fetched to the server';
//      document.body.appendChild(div);
// })

const btn = document.getElementById("btn");  // button for sending message
const inputmsg = document.getElementById("newMessage");     // Input tagged
const msglist = document.getElementById("msglist"); // Ul tagged

btn.onclick = () => {
  const msg = inputmsg.value;
  socket.emit("msg_send", {
    message: msg,
  });
};


// On msg Recieved from server

socket.on('msg_recieved' , (data) => {
     let listmsg = document.createElement('li');
     listmsg.innerText = data.message;
     msglist.appendChild(listmsg);
})
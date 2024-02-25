const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path')

const clientPath = path.join(__dirname, "../front/src/components");
app.use(express.static(clientPath));

/*app.get('/', (req, res) => {
    //res.sendFile(__dirname + '/index.html');
    //res.send('<h1>Hello World!</h1>');
    res.sendFile(path.join(clientPath, ""))
});*/

io.on('connection', (socket) => {
    console.log(`User connected: ${socket.id}`);

    // Pour rejoindre la room
    socket.on('join_room', (data) =>{
        socket.join(data);
        console.log(`User with ID: ${socket.id} joined the room ${data}`);
        io.emit("user_count_update", io.sockets.adapter.rooms.size);
    });

    // Pour que l'admin puisse commencer le qcm
    socket.on('start_qcm', (data)=>{
        
        socket.broadcast.emit('start_qcm', data);
    });

    // Répondre aux questions
    socket.on('answer_question', (data)=>{
        
        socket.broadcast.emit('answer_question', data);
    });

    // Pour suivre les notations pour l'admin
    socket.on('follow_notation', (data)=>{
       
        socket.broadcast.emit('follow_notation', data);
    });

    // Quand le user se déconnecte
    socket.on('disconnect', () => {
        console.log(`User disconnected: ${socket.id}`);
    });
});

http.listen(3000, () => {
    console.log('Server running on port 3000');
});

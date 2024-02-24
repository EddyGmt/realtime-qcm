const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: 'http://localhost:3000', methods: ["GET", "POST"] }
});

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

io.on('connection', (socket) => {
    console.log('New user connected');
    socket.emit('connection', null);

    socket.on('disconnect', () => {
        console.log('A user is disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

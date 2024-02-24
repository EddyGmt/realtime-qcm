const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //res.send('<h1>Hello World!</h1>');
});

io.on('connection', (socket) =>{
    console.log('A client is connected');

    socket.on('disconnect', () => {
        console.log('A client is disconnected');
    })
});

http.listen(3000, ()=>{
    console.log('Server running on 3000');
});

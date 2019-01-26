const express = require('express');
const app = express();
const path = require('path');
const { socketsHandler }= require('./socketsHandler');

const port = process.env.PORT || 8000;

// Set the express instance to server static assets from the right location
app.use(express.static(path.resolve(__dirname, '../../../app/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../../app/dist', 'index.html'));
});

const server = app.listen(port);

// const io = require('socket.io')(server);

const socketIOServer = socketsHandler({ server });

// function generateRoomCode() {
//     let code = '';
//     const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     for (let n = 0; n < 4; n++) {
//         code += letters[Math.floor(Math.random() * Math.floor(26))];
//     }

//     return code;
// }

// io.on('connection', (socket) => {
//     socket.join('test');
//     socket.on('hostRoom', (data) => {
//         const roomCode = generateRoomCode();
//         socket.join(roomCode);
//         console.log(roomCode);
//         // io.emit('joinRoom', { roomCode });
//         io.sockets.in(roomCode).emit('joinRoom', { roomCode });
//         io.of('/').in('test').clients((error, clients) => {
//             if (error) {
//                 console.warn(error);
//                 return;
//             }

//             console.log(clients)
//         })
//     });

//     socket.on('joinRoom', (data) => {
//         console.log('Joining room: ', data.joinCode);
//     })
// });


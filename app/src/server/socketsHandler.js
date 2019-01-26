const io = require('socket.io');

const socketsHandler = ({ server }) => {
    const socketIOServer = io(server);
    const hostedRooms = {};

    function generateRoomCode() {
        let code = '';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let n = 0; n < 4; n++) {
            code += letters[Math.floor(Math.random() * Math.floor(26))];
        }

        return code;
    }

    function hostRoomForSocket({ socket }) {
        const roomCode = generateRoomCode();
        hostedRooms[roomCode] = {
            host: socket.id,
        };
        socket.join(roomCode);
        socketIOServer.sockets.in(roomCode).emit('hostRoom', { roomCode });
    }

    function joinRoomForSocket({ socket, roomCode }) {
        console.log(hostedRooms);
        if (hostedRooms[roomCode]) {
            socket.join(roomCode);
            socketIOServer.sockets.in(roomCode).emit('joinRoom', { roomCode });
            console.log(hostedRooms);
        }
        else {
            console.log('Cannot find room');
        }
    }

    function _init() {
        socketIOServer.on('connection', (socket) => {
            console.log('User joined');
            socket.join('test');
            socket.on('hostRoom', (data) => {
                hostRoomForSocket({ socket });
            });

            socket.on('joinRoom', ({ roomCode }) => {
                joinRoomForSocket({ socket, roomCode });
            });
        });
    }

    _init();
}

module.exports = {
    socketsHandler,
};
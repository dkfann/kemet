const io = require('socket.io');
const { gameHandler } = require('./gameHandler');

const socketsHandler = ({ server }) => {
    const socketIOServer = io(server);
    const hostedRooms = {};
    const hostList = {};

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
        // hostedRooms[roomCode] = {
        //     host: socket.id,
        // };
        socket.join(roomCode);
        hostList[socket.id] = roomCode;
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

    function handleStartGame() {
        const gameHandlerInstance = gameHandler();

        return gameHandlerInstance;
    }

    function sendGameStateToSocketsInRoom({ roomCode, gameState }) {

    }

    function _init() {
        socketIOServer.on('connection', (socket) => {
            socket.on('hostRoom', (data) => {
                hostRoomForSocket({ socket });
            });

            socket.on('joinRoom', ({ roomCode }) => {
                joinRoomForSocket({ socket, roomCode });
            });

            socket.on('startGame', () => {
                const startingGameRoomCode = hostList[socket.id];
                console.log('Starting game in room ', hostList[socket.id]);
                const gameHandlerInstance = handleStartGame();
                socketIOServer.sockets.in(startingGameRoomCode).emit('sendGameState', { gameState: gameHandlerInstance });
            });
        });
    }

    _init();
}

module.exports = {
    socketsHandler,
};
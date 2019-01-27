const io = require('socket.io');
const { gameHandler } = require('./gameHandler');

const socketsHandler = ({ server }) => {
    const socketIOServer = io(server);
    const hostedRooms = {};
    const userMap = {};

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
        hostedRooms[roomCode] = {
            users: [socket.id],
            gameHandler: {},
        };
        // hostList[socket.id].roomCode = roomCode;
        socketIOServer.sockets.in(roomCode).emit('hostRoom', { roomCode });
    }

    function joinRoomForSocket({ socket, roomCode }) {
        console.log(hostedRooms);
        if (hostedRooms[roomCode]) {
            socket.join(roomCode);
            hostedRooms[roomCode].users = [
                ...hostedRooms[roomCode].users,
                socket.id,
            ];
            socketIOServer.sockets.in(roomCode).emit('joinRoom', { roomCode });
            console.log(hostedRooms);
        }
        else {
            console.log('Cannot find room');
        }
    }

    function handleStartGame() {
        const gameHandlerInstance = gameHandler({ socketIOServer });

        return gameHandlerInstance;
    }

    function getSocketsCurrentGameHandler({ socket }) {
        const [socketId, roomCode] = Object.keys(socket.rooms);
        const gameHandler = hostedRooms[roomCode].gameHandler;

        return gameHandler;
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
                // Grab the socket's room with Object.keys()
                // The first item will be the socket's id
                // A user should only be able to be in one room, so use that item as the room code
                const [socketId, roomCode] = Object.keys(socket.rooms);
                console.log('Starting game in room ', roomCode);
                hostedRooms[roomCode].gameHandler = gameHandler({ socketIOServer });
                socketIOServer.sockets.in(roomCode).emit('startGame', { gameState: hostedRooms[roomCode].gameHandler.gameState });
            });

            socket.on('selectItem', ({ item }) => {
                const gameHandler = getSocketsCurrentGameHandler({ socket });
                const [socketId, roomCode] = Object.keys(socket.rooms);
                gameHandler.applySelectItemToGameState({ item, owner: socket.id });
                socketIOServer.sockets.in(roomCode).emit('updateGameState', { gameState: gameHandler.gameState });
            });
        });
    }

    _init();
}

module.exports = {
    socketsHandler,
};

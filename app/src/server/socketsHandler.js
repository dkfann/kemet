const io = require('socket.io');
const { gameHandler } = require('./gameHandler');

const socketsHandler = ({ server }) => {
    const socketIOServer = io(server);
    const hostedRooms = {};
    const socketIdToUsernameMap = {};

    function generateRoomCode() {
        let code = '';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let n = 0; n < 4; n++) {
            code += letters[Math.floor(Math.random() * Math.floor(26))];
        }

        return code;
    }

    function addUserToRoom({ socket, roomCode, username, isHosting }) {
        socket.join(roomCode);
        hostedRooms[roomCode] = {
            users: isHosting ? [socket.id] : [...hostedRooms[roomCode].users, socket.id],
            gameHandler: {},
        };
        socketIdToUsernameMap[socket.id] = username;
    }

    function getUsernamesOfRoomUsers({ roomCode }) {
        const usersInRoom = Object.keys(socketIOServer.sockets.adapter.rooms[roomCode].sockets)
            .map((socketId) => {
                return socketIdToUsernameMap[socketId]
            });

        return usersInRoom;
    }

    function hostRoomForSocket({ socket, username }) {
        const roomCode = generateRoomCode();

        addUserToRoom({ socket, roomCode, username, isHosting: true });
        const usersInRoom = getUsernamesOfRoomUsers({ roomCode });
        socketIOServer.sockets.in(roomCode).emit('hostRoom', { roomCode, usersInRoom });
    }

    function joinRoomForSocket({ socket, roomCode, username }) {
        if (hostedRooms[roomCode]) {
            addUserToRoom({ socket, roomCode, username, isHosting: false });
            const usersInRoom = getUsernamesOfRoomUsers({ roomCode });
            socketIOServer.sockets.in(roomCode).emit('joinRoom', { roomCode, usersInRoom });
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
            socket.on('hostRoom', ({ username }) => {
                hostRoomForSocket({ socket, username });
            });

            socket.on('joinRoom', ({ roomCode, username }) => {
                joinRoomForSocket({ socket, roomCode, username });
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
                gameHandler.applySelectItemToGameState({ item, owner: socketIdToUsernameMap[socket.id] });
                socketIOServer.sockets.in(roomCode).emit('updateGameState', { gameState: gameHandler.gameState });
            });
        });
    }

    _init();
}

module.exports = {
    socketsHandler,
};

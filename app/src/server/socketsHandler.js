const io = require('socket.io');
const { GameHandler } = require('./gameHandler');

const socketsHandler = ({ server }) => {
    const socketIOServer = io(server, {
         pingTimeout: 9999999,
    });
    const hostedRooms = {};
    const socketIdToUsernameMap = {};

    function generateRoomCode() {
        let code = '';
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let n = 0; n < 4; n++) {
            code += letters[Math.floor(Math.random() * 26)];
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
                return socketIdToUsernameMap[socketId];
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
        if (hostedRooms[roomCode.toUpperCase()]) {
            if (!getUsernamesOfRoomUsers({ roomCode }).includes(username)) {
                addUserToRoom({ socket, roomCode, username, isHosting: false });
                const usersInRoom = getUsernamesOfRoomUsers({ roomCode });
                socketIOServer.sockets.in(roomCode).emit('joinRoom', { roomCode, usersInRoom });
            } else {
                socketIOServer.to(`${socket.id}`).emit('error', { message: 'A user in the room has that username' });
            }
        }
        else {
            console.warn('Cannot find room');
        }
    }

    function getSocketsCurrentGameHandler({ socket }) {
        let gameHandler = {};
        const [socketId, roomCode] = Object.keys(socket.rooms);
        if (hostedRooms[roomCode]) {
            gameHandler = hostedRooms[roomCode].gameHandler;
        }

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
                const usernames = getUsernamesOfRoomUsers({ roomCode });
                hostedRooms[roomCode].gameHandler = new GameHandler({ socketIOServer, usernames });
                socketIOServer.sockets.in(roomCode).emit('startGame', {
                    gameState: hostedRooms[roomCode].gameHandler.gameState,
                    connectedUsers: getUsernamesOfRoomUsers({ roomCode }),
                });
                Object.keys(socketIOServer.sockets.adapter.rooms[roomCode].sockets)
                    .forEach((socketId) => {
                        socketIOServer.to(socketId).emit('username', { username: socketIdToUsernameMap[socketId] });
                    });
            });

            socket.on('applyTileAction', ({ tileId }) => {
                const gameHandler = getSocketsCurrentGameHandler({ socket });
                const [socketId, roomCode] = Object.keys(socket.rooms);

                const currentGameState = gameHandler.gameState;
                if (!currentGameState) return;
                const user = socketIdToUsernameMap[socketId];

                // If the user currently owns that tile, remove it
                // Otherwise, make the current user the owner
                if (!currentGameState[user].includes(tileId)) {
                    gameHandler.applySelectTileToGameState({
                        tileId,
                        owner: socketIdToUsernameMap[socket.id],
                    });

                    socketIOServer.sockets.in(roomCode).emit('updateGameLog', {
                        tileId,
                        owner: socketIdToUsernameMap[socket.id],
                        type: 'select',
                    });
                } else {
                    gameHandler.applyDeselectTileToGameState({
                        tileId,
                        owner: socketIdToUsernameMap[socket.id],
                    });

                    socketIOServer.sockets.in(roomCode).emit('updateGameLog', {
                        tileId,
                        owner: socketIdToUsernameMap[socket.id],
                        type: 'deselect',
                    });
                }

                socketIOServer.sockets.in(roomCode).emit('updateGameState', {
                    gameState: gameHandler.gameState,
                });
            });
        });
    }

    _init();
}

module.exports = {
    socketsHandler,
};

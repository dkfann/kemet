<template>
    <div id="app" class="web-container">
        <div class="main-title">Kemet</div>
        <div class="room-control-container">
            <label class="username-label" for="username">Username:</label>
            <input class="username-input" type="text" v-model="username" placeholder="Enter Username" maxlength="16"> 
        </div>
        <div class="room-control-container host-room">
            <button @click="hostRoom">HOST A ROOM</button>
        </div>
        <div class="room-control-container join-room">
            <label class="join-room-label" for="joinCode">Room Code: </label>
            <input class="join-room-input" v-model="joinCode" type="text">
            <button class="join-room-button" @click="joinRoom">JOIN ROOM</button>
        </div>
        <div class="room-code">{{ roomCode }}</div>
        <div v-if="isHost" class="start-game">
            <button @click="startGame">Start Game</button>
        </div>
    </div>
</template>

<script>
export default {
        name: 'roomSetup',
    data() {
        return {
            roomCode: '',
            socket: null,
            joinCode: '',
            isHost: false,
            username: '',
            startedGame: false,
        };
    },
    created() {
        this.socket = io.connect();
        this.socket.on('hostRoom', (data) => {
            console.log('Hosting room: ', data.roomCode);
            this.roomCode = data.roomCode;
            this.isHost = true;

            console.log(data);
        });

        this.socket.on('sendGameState', (data) => {
            console.log(data.gameState);
        });
        // this.socket.on('from the server', (test) => {
        //     console.log('got from the server');
        // });
        // this.joinRoom();

        // this.$socket.on('testing', (data) => {
        //     console.log('testing!');
        // });
    },
    methods: {
        hostRoom() {
            this.socket.emit('hostRoom', { username: this.username });
            // this.$socket.emit('hey', { what: 1 });
        //    io.on('connection', (socket) => {

        //    });
            // io.on('connection', (socket) => {
            //     console.log('connected in client!');
            // });
        },
        joinRoom() {
            this.socket.emit('joinRoom', { roomCode: this.joinCode });
            // console.log(this.joinCode);
        },
        startGame() {
            this.socket.emit('startGame');
        }
    }
}
</script>


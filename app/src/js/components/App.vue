<template>
    <div id="app" class="web-container">
        <div class="main-title">Kemet</div>
        <div class="username-input">
            <input type="text" v-model="username" placeholder="Enter Username" maxlength="16"> 
        </div>
        <div class="host-room">
            <button @click="hostRoom">HOST A ROOM</button>
        </div>
        <div class="join-room">
            <input v-model="joinCode" type="text">
            <button @click="joinRoom">JOIN A ROOM</button>
        </div>
        <div class="room-code">{{ roomCode }}</div>
        <div class="username">
            {{ username }}
        </div>
        <div v-if="isHost" class="start-game">
            <button @click="startGame">Start Game</button>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client';

export default {
    name: 'app',
    data() {
        return {
            roomCode: '',
            socket: null,
            joinCode: '',
            isHost: false,
            username: '',
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
            this.socket.emit('hostRoom');
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

        }
    }
}
</script>

<style>
    @font-face {
        font-family: 'Chronicle';
        src: url('../../assets/fonts/ChronicleDisp-Black.otf');
    } 

    #app {
        display: grid;
        background-color: #faf6eb;
        width: 100vw;
        height: 100vh;
        grid-template-columns: 20% 20% 20% 20% 20%;
        grid-template-rows: 150px 150px 150px;
        grid-template-areas:
            "header header header header header"
            "main main main main main";
    }

    .main-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Chronicle';
        font-size: 5rem;
        grid-area: header;
    }

    .host-room {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        grid-column-start: 2;
    }

    .join-room {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        grid-column-start: 4;
    }

    .room-code {
        font-family: 'Chronicle';
        grid-row-start: 3;
        grid-column-start: 3;
        font-size: 3rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
</style>



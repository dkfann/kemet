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
        <div v-if="inRoom" class="start-game">
            <button @click="startGame">Start Game</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'room-setup',
    props: ['socket'],
    data() {
        return {
            roomCode: '',
            joinCode: '',
            inRoom: false,
            username: '',
        };
    },
    created() {
        this.socket.on('hostRoom', (data) => {
            console.log('Hosting room: ', data.roomCode);
            this.roomCode = data.roomCode;
            this.inRoom = true;

            console.log(data);
        });

        this.socket.on('sendGameState', (data) => {
            console.log(data.gameState);
        });
    },
    methods: {
        hostRoom() {
            this.socket.emit('hostRoom', { username: this.username });
        },
        joinRoom() {
            this.socket.emit('joinRoom', { roomCode: this.joinCode });
        },
        startGame() {
            this.socket.emit('startGame');
        }
    }
}
</script>

<style>
        @font-face {
        font-family: 'Chronicle';
        src: url('../../assets/fonts/ChronicleDisp-Black.otf');
    } 

   /* #app {
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
    */

    #app {
        display: flex;
        width: 100vw;
        height: 100vh;
        background-color: #faf6eb;
        flex-direction: column;
        align-items: center;
        font-family: 'Chronicle';
    }

    .main-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        grid-area: header;
    }

    .username-label {
        margin-right: 1rem;
    }

    .room-control-container {
        margin: 0.5rem;
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

    .join-room-label {
        margin-right: 1rem;
    }

    .join-room-input {
        margin-right: 1rem;
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


<template>
    <div id="app" class="room-setup">
        <div class="main-title">KEMET</div>
        <div class="prepare-room" v-if="!inRoom">
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
        </div>
        <div class="room-lobby" v-if="inRoom">
            <div class="room-code">{{ roomCode }}</div>
            <div class="start-game">
                <button @click="startGame">Start Game</button>
            </div>
            <div class="connected-users">
                <div v-for="user in connectedUsers">
                    <div>{{ user }}</div>
                </div>
            </div>
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
            connectedUsers: [],
        };
    },
    created() {
        this.socket.on('hostRoom', ({ roomCode, usersInRoom }) => {
            console.log('Hosting room: ', roomCode);
            this.roomCode = roomCode;
            this.inRoom = true;
            this.connectedUsers = usersInRoom;
        });

        this.socket.on('joinRoom', ({ roomCode, usersInRoom }) => {
            this.roomCode = roomCode;
            this.inRoom = true;
            this.connectedUsers = usersInRoom;
        });

        this.socket.on('sendGameState', (data) => {
            console.log(data.gameState);
        });

        this.socket.on('username', (data) => {
            console.log(data.username);
        });
    },
    methods: {
        hostRoom() {
            if (!this.username) return;
            this.socket.emit('hostRoom', { username: this.username });
        },
        joinRoom() {
            if (!this.username) return;
            this.socket.emit('joinRoom', { roomCode: this.joinCode, username: this.username });
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

    @font-face {
        font-family: 'Separat';
        src: url('../../assets/fonts/Separat-Regular.otf');
    }

    @font-face {
        font-family: 'Tiempo Text';
        src: url('../../assets/fonts/TiemposTextTest-Regular.woff');
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

    .room-setup {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100vw;
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
        grid-row-start: 3;
        grid-column-start: 3;
        font-size: 3rem;
        display: flex;
        justify-content: center;
        align-items: flex-start;
    }
</style>


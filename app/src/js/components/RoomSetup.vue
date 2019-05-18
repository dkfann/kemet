<template>
    <div id="app" class="room-setup">
        <div class="prepare-room" v-if="!inRoom">
            <div class="main-title">Kemet</div>
            <div class="room-control-container host-room">
                <label class="username-label" for="username">Username:</label>
                <input class="username-input" type="text" v-model="username" placeholder="Enter Username" maxlength="10"> 
                <button class="host-room-button" @click="hostRoom">Host Room</button>
            </div>
            <div class="room-control-container join-room">
                <label class="join-room-label" for="joinCode">Room Code: </label>
                <input class="join-room-input" v-model="joinCode" type="text" maxLength="4" placeholder="Enter Room Code">
                <button class="join-room-button" @click="joinRoom">Join Room</button>
            </div>
            <div class="error">{{ error }}</div>
        </div>
        <div class="room-lobby" v-if="inRoom">
            <div class="room-lobby-title">Game Lobby</div>
            <div class="room-code">{{ roomCode }}</div>
            <div class="connected-users">
                <div v-for="user in connectedUsers" :key="user">
                    <div>{{ user }}</div>
                </div>
            </div>
            <div class="start-game">
                <button @click="startGame">Start Game</button>
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
            error: '',
        };
    },
    created() {
        this.socket.on('hostRoom', ({ roomCode, usersInRoom }) => {
            this.roomCode = roomCode;
            this.inRoom = true;
            this.connectedUsers = usersInRoom;
        });

        this.socket.on('joinRoom', ({ roomCode, usersInRoom }) => {
            this.roomCode = roomCode;
            this.inRoom = true;
            this.connectedUsers = usersInRoom;
        });

        this.socket.on('error', ({ message }) => {
            this.error = message;
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
        font-family: 'Feijoa';
        src: url('../../assets/fonts/Feijoa-Display.woff');
    }

    .room-setup {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100vw;
        height: 100vh;
        color: #4b6464;
    }

    .main-title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
        grid-area: header;
        text-transform: uppercase;
        color: #ff6468;
    }

    .username-label {
        margin-right: 1rem;
    }

    .room-control-container {
        display: flex;
        justify-content: space-around;
        margin: 0 0.5rem 1rem 0.5rem;
    }

    input {
        font-family: 'Feijoa';
        margin: 0 0.5rem;
        border: 0;
        padding: 0.25rem;
    }

    button {
        font-family: 'Feijoa';
        background-color: #ffe59f;
        border: 0;
        color: #4b6464;
        padding: 0.25rem;
    }

    .host-room-button,
    .join-room-button {
        white-space: nowrap;
        color: #4b6464;
    }

    .room-lobby {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #4b6464;
    }

    .room-lobby-title {
        font-size: 3rem;
        color: #ff6468;
    }

    .room-code {
        font-size: 3rem;
        color: #F89E70;
    }

    .connected-users {
        margin-bottom: 1rem;
    }

    .error {
        text-align: center;
        color: #ff3500;
    }
</style>


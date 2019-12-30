<template>
    <div id="app-container">
        <room-setup v-if="!startedGame" :socket="socket" />
        <game-container
            v-if="startedGame"
            :socket="socket"
            :gameState="gameState"
            :connectedUsers="connectedUsers"
        />
    </div>
</template>

<script>
import io from 'socket.io-client';
import RoomSetup from './RoomSetup.vue';
import GameContainer from './GameContainer.vue';

export default {
    name: 'app',
    data() {
        return {
            socket: null,
            startedGame: false,
            gameState: {},
            connectedUsers: [],
        };
    },
    created() {
        this.socket = io.connect();
        this.socket.on('startGame', ({ roomCode, username, gameState, connectedUsers }) => {
            this.startedGame = true;
            this.gameState = gameState;
            this.connectedUsers = connectedUsers;
            document.cookie = `kemet=${username}:${roomCode}`;
        });
        this.socket.on('rejoinGame', ({ username, roomCode }) => {
            console.log(`Rejoining the game with username ${username} and room code ${roomCode}`);
        })
    },
    components: { RoomSetup, GameContainer },
};
</script>

<style>
    @font-face {
        font-family: 'Tiempo Text';
        src: url('../../assets/fonts/TiemposTextTest-Regular.woff');
    }

    @font-face {
        font-family: 'Feijoa';
        src: url('../../assets/fonts/Feijoa-Display.woff');
    }

    #app-container {
        display: flex;
        width: 100vw;
        height: 100%;
        background-color: #faf6eb;
        font-family: 'Feijoa';
    }
</style>



<template>
    <div id="app-container">
        <room-setup v-if="!startedGame" :socket="socket" />
        <game-container
            v-if="startedGame"
            :socket="socket"
            :gameState="gameState"
            :connectedUsers="connectedUsers"
            :username="rejoinUsername"
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
            rejoinUsername: null,
            socket: null,
            startedGame: false,
            gameState: {},
            connectedUsers: [],
        };
    },
    created() {
        this.socket = io.connect();
        this.socket.on('startGame', ({ roomCode, gameState, connectedUsers }) => {
            this.startedGame = true;
            this.gameState = gameState;
            this.connectedUsers = connectedUsers;
        });

        this.socket.on('rejoinGame', ({
            username,
            roomCode,
            gameState,
            connectedUsers,
        }) => {
            this.startedGame = true;
            this.gameState = gameState;
            this.connectedUsers = connectedUsers;
            this.rejoinUsername = username;
        });
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

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
        this.socket.on('startGame', ({ gameState, connectedUsers }) => {
            this.startedGame = true;
            console.log(gameState);
            this.gameState = gameState;
            this.connectedUsers = connectedUsers;
        })
    },
    components: { RoomSetup, GameContainer },
};
</script>

<style>
    #app-container {
        display: flex;
        width: 100vw;
        height: 100vh;
        background-color: #faf6eb;
    }
</style>



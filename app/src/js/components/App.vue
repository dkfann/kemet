<template>
    <div>
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
            this.gameState = gameState;
            this.connectedUsers = connectedUsers;
        })
    },
    components: { RoomSetup, GameContainer },
};
</script>

<style>

</style>



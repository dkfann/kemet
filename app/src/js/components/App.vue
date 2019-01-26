<template>
    <div>
        <room-setup v-if="!startedGame" :socket="socket" />
        <game-container v-if="startedGame" :socket="socket" :gameState="gameState" />
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
        };
    },
    created() {
        this.socket = io.connect();
        this.socket.on('startGame', (data) => {
            this.startedGame = true;
            this.gameState = data.gameState;
        })
    },
    components: { RoomSetup, GameContainer },
};
</script>

<style>

</style>



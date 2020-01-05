<template>
    <div class="game-container">
        <players-container :username="username" :players="connectedUsers" :gameState="currentGameState" :socket="socket"/>
        <tile-tableau :gameState="currentGameState" :socket="socket" />
        <log-container :socket="socket" />
    </div>
</template>

<script>
import PlayersContainer from './PlayersContainer.vue';
import TileTableau from './TileTableau.vue';
import LogContainer from './LogContainer.vue';

export default {
    name: 'game-container',
    props: ['gameState', 'socket', 'connectedUsers', 'currentUser', 'username'],
    computed: {
        gameStateKeys() {
            return Object.keys(this.gameState);
        },
    },
    data() {
        return {
            currentGameState: this.gameState,
        };
    },
    created() {
        this.socket.on('updateGameState', ({ gameState }) => {
            this.currentGameState = gameState;
        });

        // setInterval(() => {
        //     this.socket.emit('keepAlive');
        // }, 29000);
    },
    methods: {
        selectItem(item) {
            this.socket.emit('selectItem', { item });
        }
    },
    components: { PlayersContainer, TileTableau, LogContainer },
}
</script>

<style>
    .item {
        font-size: 4rem;
        margin: 3rem;
    }
</style>



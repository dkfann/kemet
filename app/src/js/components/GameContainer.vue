<template>
    <div class="game-container">
        <players-container :players="connectedUsers" :gameState="currentGameState" :socket="socket"/>
        <tile-tableau :gameState="currentGameState" :socket="socket" />
    </div>
</template>

<script>
import PlayersContainer from './PlayersContainer.vue';
import TileTableau from './TileTableau.vue';

export default {
    name: 'game-container',
    props: ['gameState', 'socket', 'connectedUsers', 'currentUser'],
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
    },
    methods: {
        selectItem(item) {
            this.socket.emit('selectItem', { item });
        }
    },
    components: { PlayersContainer, TileTableau },
}
</script>

<style>
    .item {
        font-size: 4rem;
        margin: 3rem;
    }
</style>



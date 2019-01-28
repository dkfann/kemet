<template>
    <div class="game-container">
        <players-container :players="connectedUsers" />
        <div v-for="tile in currentGameState.redTiles">
            <div @click="selectItem(tile)" class="item">
                <div>{{ tile.key }}</div>
                <img :src="tile.img" alt=""/>
                <div>{{ tile.owner }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import PlayersContainer from './PlayersContainer.vue';

export default {
    name: 'game-container',
    props: ['gameState', 'socket', 'connectedUsers'],
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
    components: { PlayersContainer },
}
</script>

<style>
    .item {
        font-size: 4rem;
        margin: 3rem;
    }
</style>



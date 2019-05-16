<template>
    <div class="log-container">
        <span v-for="log in gameLog">{{log}}</span>
    </div>
</template>

<script>
import generateTiles from '../tiles/tileUtils';

export default {
    name: 'log-container',
    props: ['socket'],
    created() {
        this.socket.on('updateGameLog', ({ tileId, owner }) => {
            const tiles = generateTiles();
            const updatedTile = tiles[tileId];
            this.gameLog.push(`${owner} picked up ${updatedTile.title}`);
        });
    },
    data() {
        return {
            gameLog: [],
        };
    }
}
</script>

<style>
    .log-container {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        overflow-y: scroll;
        height: 17vh;
    }
</style>


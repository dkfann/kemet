<template>
    <div class="log-container">
        <span v-for="log in logs" :key="log.tileId">{{showLog(log)}}</span>
    </div>
</template>

<script>
import generateTiles from '../tiles/tileUtils';

export default {
    name: 'log-container',
    props: ['socket', 'logs'],
    data() {
        return {
            tiles: generateTiles(),
        };
    },
    methods: {
        showLog({ owner, tileId, type }) {
            return type === 'select' ? `${owner} picked up ${this.tiles[tileId].title}` : `${owner} returned ${this.tiles[tileId].title}`
        }
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
        margin-top: 1rem;
    }
</style>


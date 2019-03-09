<template>
    <div class="tableau">
        <div v-for="tile in gameState.redTiles" :key="tile.id" v-touch:moving="movingHandler">
            <div @click="selectTile(tile)" class="tile">
                <div>{{ tile.key }}</div>
                <img :src="tile.img" alt="">
                <div>{{ tile.owner }}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'tile-tableau',
        props: ['gameState', 'socket'],
        created() {

        },
        data() {
            return {};
        },
        methods: {
            selectTile(tile) {
                this.socket.emit('selectItem', { item: tile });
            },
            movingHandler(event) {
                console.log(event);
            }
        }
    }
</script>


<style>
    .tableau {
        display: grid;
        grid-template-columns: 50% 50%;
        width: 100vw;
    }

    .tile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1rem;
    }
</style>


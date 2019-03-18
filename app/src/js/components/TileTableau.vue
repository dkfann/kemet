<template>
        <div class="tableau">
            <siema ref="siema">
                <div class="red-tiles">
                    <div @click="selectTile(tile)" class="tile" v-for="tile in this.tiles.redTiles" :key="tile.id">
                        <div>{{ tile.title }}</div>
                        <img :src="tile.img" alt="">
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="blue-tiles">
                    TEST
                </div>
                <div class="blue-tiles">
                    ANOTHER
                </div>
            </siema>
            <div @click="go">TEST GOTO</div>
        </div>
</template>

<script>
    import generateTiles from '../tiles/tileUtils';
    export default {
        name: 'tile-tableau',
        props: ['gameState', 'socket'],
        created() {
            this.tiles = generateTiles();
            console.log(this.tiles);
        },
        data() {
            return {};
        },
        methods: {
            selectTile(tile) {
                this.socket.emit('selectTile', { tileId: tile.id });
            },
            movingHandler(event) {
                // console.log(event);
            },
            go() {
                this.$refs.siema.goTo(2);
            }
        }
    }
</script>


<style>
    .tableau {
        width: 100vw;
    }

    .red-tiles {
        display: grid;
        grid-template-columns: 50% 50%;
    }

    .blue-tiles {
        display: grid;
    }

    .tile {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 1rem;
    }
</style>


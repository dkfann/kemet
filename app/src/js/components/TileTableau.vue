<template>
        <div class="tableau">
            <siema ref="siema">
                <!-- <div class="red-tiles">
                    <div @click="selectTile(tile)" class="tile" v-for="tile in this.tiles.redTiles.level_1" :key="tile.id">
                        <div>{{ tile.title }}</div>
                        <img :src="tile.img" alt="">
                        <div>{{ tile.owner }}</div>
                    </div>
                </div> -->
                <!-- <tile-section color="red"></tile-section> -->
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 1})">
                        <div>{{ tile.title }}</div>
                        <img :src="tile.img" alt="">
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
               <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 2})">
                        <div>{{ tile.title }}</div>
                        <img :src="tile.img" alt="">
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
               <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 3})">
                        <div>{{ tile.title }}</div>
                        <img :src="tile.img" alt="">
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 4})">
                        <div>{{ tile.title }}</div>
                        <img :src="tile.img" alt="">
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
            </siema>
            <div @click="go">TEST GOTO</div>
        </div>
</template>

<script>
    import {
        generateTiles,
        generateTilesByColorAndLevel,
    }from '../tiles/tileUtils';
    import TileSection from './TileSection.vue';

    export default {
        name: 'tile-tableau',
        props: ['gameState', 'socket'],
        created() {

        },
        data() {
            return {
                generateTilesByColorAndLevel,
            };
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
        },
        components: { TileSection },
    }
</script>


<style>
    .tableau {
        width: 100vw;
    }

    .tile-container {
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


<template>
        <div class="tableau">
            <siema ref="siema">
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="selectTile(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 1, gameState })"
                        v-long-press="300"
                        @long-press-start="deselectTile(tile)"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
               <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 2})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
               <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 3})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'red', level: 4})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'blue', level: 1})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'blue', level: 2})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'blue', level: 3})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'blue', level: 4})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'white', level: 1})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'white', level: 2})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'white', level: 3})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div class="tile" @click="selectTile(tile)" :key="tile.id" v-for="tile in generateTilesByColorAndLevel({ color: 'white', level: 4})">
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div>{{ tile.owner }}</div>
                    </div>
                </div>
            </siema>
            <div class="goto-tiles">
                <div @click="goToRedTiles">Red Tiles</div>
                <div @click="goToBlueTiles">Blue Tiles</div>
                <div @click="goToWhiteTiles">White Tiles</div>
            </div>
        </div>
</template>

<script>
    import {
        generateTiles,
        generateTilesByColorAndLevel,
    }from '../tiles/tileUtils';
    import TileSection from './TileSection.vue';
    import LongPress from 'vue-directive-long-press';

    export default {
        name: 'tile-tableau',
        props: ['gameState', 'socket'],
        directives: {
            'long-press': LongPress,
        },
        data() {
            return {
                generateTilesByColorAndLevel,
                tileClass: function(tile) {
                    return {
                        'tile': true,
                        'is-taken': !!tile.owner,
                    };
                }
            };
        },
        methods: {
            selectTile(tile, $event) {
                this.socket.emit('selectTile', { tileId: tile.id });
            },
            movingHandler(event) {
                // console.log(event);
            },
            goToRedTiles() {
                this.$refs.siema.goTo(0);
            },
            goToBlueTiles() {
                this.$refs.siema.goTo(4);
            },
            goToWhiteTiles() {
                this.$refs.siema.goTo(8);
            },
            deselectTile(tile) {
                this.socket.emit('deselectTile', { tileId: tile.id });
            }
        },
        components: { TileSection },
    }
</script>


<style>
    @font-face {
        font-family: 'Feijoa Bold';
        src: url('../../assets/fonts/Feijoa-Bold.woff');
    }

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
        justify-content: end;
        align-items: center;
        flex-direction: column;
        font-size: 1rem;
        padding: 0.5rem;
    }

    .tile-img {
        width: auto;
        height: 15vh;
    }

    .tile-title {
        text-transform: uppercase;
        white-space: nowrap;
        font-size: 0.75rem;
        font-family: 'Feijoa Bold';
    }

    .tile-desc {
        font-size: 0.65rem;
        text-align: center;
    }

    .goto-tiles {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-transform: uppercase;
    }

    .is-taken {
        filter: grayscale(1);
    }
</style>


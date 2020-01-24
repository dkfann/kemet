<template>
        <div class="tableau">
            <siema ref="siema">
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'red',
                            level: 1,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
               <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'red',
                            level: 2,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
               <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'red',
                            level: 3,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'red',
                            level: 4,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'blue',
                            level: 1,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'blue',
                            level: 2,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'blue',
                            level: 3,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'blue',
                            level: 4,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'white',
                            level: 1,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'white',
                            level: 2,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'white',
                            level: 3,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
                <div class="tile-container">
                    <div
                        :class="tileClass(tile)"
                        @click="applyTileAction(tile)"
                        :key="tile.id"
                        v-for="tile in generateTilesByColorAndLevel({
                            color: 'white',
                            level: 4,
                            gameState,
                        })"
                    >
                        <div class="tile-title">{{ tile.title }}</div>
                        <img class="tile-img" :src="tile.img" alt="">
                        <div class="tile-desc">{{ tile.desc }}</div>
                        <div class="tile-owner">{{ tile.owner }}</div>
                    </div>
                </div>
            </siema>
            <div class="goto-tiles">
                <button class="goto-tile" @click="goToRedTiles">Red Tiles</button>
                <button class="goto-tile" @click="goToBlueTiles">Blue Tiles</button>
                <button class="goto-tile" @click="goToWhiteTiles">White Tiles</button>
            </div>
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
            applyTileAction(tile, $event) {
                this.socket.emit('applyTileAction', { tileId: tile.id });
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
        justify-content: flex-start;
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
        margin-top: 0.25rem;
    }

    .goto-tiles {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-transform: uppercase;
    }

    .goto-tile {
        background-color: #fdc631;
    }

    .is-taken {
        filter: grayscale(1);
    }
</style>


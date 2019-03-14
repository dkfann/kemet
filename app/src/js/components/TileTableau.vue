<template>
        <div class="tableau">
            <siema ref="siema">
                <div class="red-tiles">
                    <div @click="selectTile(tile)" class="tile" v-for="tile in gameState.redTiles" :key="tile.id">
                        <div>{{ tile.key }}</div>
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


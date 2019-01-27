<template>
    <div>
        <div v-for="item in currentGameState.test">
            <div @click="selectItem(item)" class="item">
                <div>{{ item.val }}</div>
                <div>{{ item.owner }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'game-container',
    props: ['gameState', 'socket'],
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
    }


}
</script>

<style>
    .item {
        font-size: 4rem;
        margin: 3rem;
    }
</style>



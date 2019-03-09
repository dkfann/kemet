<template>
    <div class="players-container">
        <div v-for="username in usernames" class="players-list">
            <div class="player-username">{{ username }}</div>
            <div class="player-selected-tiles" v-for="tile in getPlayerTiles(username)">
                {{ tile.key }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'players-container',
    props: ['players', 'gameState', 'socket'],
    created() {
        console.log(this.players);
        console.log(this.gameState.redTiles);
        console.log(this.socket);
    },
    data() {
        return {
            usernames: this.players,
        };
    },
    methods: {
        getPlayerTiles(username) {
            const playerTiles = [];

            Object.keys(this.gameState.redTiles).forEach(key => {
                if (this.gameState.redTiles[key].owner === username) {
                    playerTiles.push(this.gameState.redTiles[key]);
                }
            });

            return playerTiles;
        }
    },
}
</script>

<style>
    @font-face {
        font-family: 'Chronicle';
        src: url('../../assets/fonts/ChronicleDisp-Black.otf');
    }

    .players-container {
        background-color: #ffe59f;
        height: 20vh;
    }

    .players-list {
        display: flex;
        flex-direction: column;
        font-family: 'Chronicle';
        font-size: 2rem;
    }

    .player-username {

    }
</style>


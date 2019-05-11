<template>
    <div class="players-container">
        <div class="top-nav" v-if="!changingUser">
            <div class="current-player" @click="showChangeUserList">{{ currentUser }}</div>
            <div class="view-red-tiles">Red Tiles</div>
            <div class="view-blue-tiles">Blue Tiles</div>
            <div class="view-white-tiles">White Tiles</div>
        </div>
        <div class="current-player-tiles" v-if="!changingUser">
            <div class="current-red-tiles" v-for="tile in getPlayerTiles(currentUser)" :key="tile.id">
                {{ tile.title }} - {{ tile.desc }}
            </div>
        </div>
        <div class="change-user-list" v-if="changingUser" >
            <div class="change-to-username" :key="username" v-for="username in usernames" @click="changeToUser(username)">
                {{ username }}
            </div>
        </div>
        <!-- <div class="change-user" @click="showChangeUserList">
            Change User
        </div> --> 
        <!-- <div class="current-player-tiles" v-for="tile in getPlayerTiles(username)">
            {{ tile.key }}
        </div> -->
        <!-- <div v-for="username in usernames" class="players-list">
            <div class="player-username">{{ username }}</div>
            <div class="player-selected-tiles" v-for="tile in getPlayerTiles(username)">
                {{ tile.key }}
            </div>
        </div> -->
    </div>
</template>

<script>
import generateTiles from '../tiles/tileUtils';

export default {
    name: 'players-container',
    props: ['players', 'gameState', 'socket'],
    created() {
        this.socket.on('username', (data) => {
            this.currentUser = data.username;
        });
        // console.log(this.players);
        // console.log(this.gameState.redTiles);
        // console.log(this.socket);
    },
    data() {
        return {
            usernames: this.players,
            currentUser: '',
            changingUser: false,
            tileData: generateTiles(),
        };
    },
    methods: {
        getPlayerTiles(username) {
            if (!username) return;
            const playerTiles = [];

            this.gameState[username].forEach(tileId => {
                playerTiles.push(this.tileData[tileId]);
            });

            return playerTiles;
        },
        getPlayerRedTiles(username) {
            if (!username) return;
            const playerRedTiles = [];

            this.gameState[username].forEach(tileId => {
                playerRedTiles.push(this.tileData[tileId]);
            });

            return playerRedTiles;
        },
        showChangeUserList() {
            this.changingUser = !this.changingUser;
        },
        changeToUser(username) {
            this.currentUser = username;
            this.changingUser = false;
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
        display: flex;
        flex-direction: column;
        font-family: 'Chronicle';
    }

    .players-list {
        display: flex;
        flex-direction: column;
        font-family: 'Chronicle';
        font-size: 2rem;
    }

    .change-user {
        text-align: right;
    }

    .top-nav {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        margin-bottom: 1rem;
    }
</style>


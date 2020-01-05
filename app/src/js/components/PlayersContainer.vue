<template>
    <div class="players-container">
        <div class="top-nav" v-if="!changingUser">
            <div class="current-player">{{ currentUser }}</div>
            <button class="change-player" @click="showChangeUserList">Change Player</button>
        </div>
        <div class="current-player-tiles" v-if="!changingUser">
            <div :class="tileClass(tile.id)" v-for="tile in getPlayerTiles(currentUser)" :key="tile.id">
                <div class="tile-info">
                    {{ tile.title }}: <span class="tile-info-desc">{{ tile.desc }}</span>
                </div>
            </div>
        </div>
        <div class="change-user-list" v-if="changingUser" >
            <div class="change-to-username" :key="username" v-for="username in usernames" @click="changeToUser(username)">
                {{ username }}
            </div>
        </div>
    </div>
</template>

<script>
import generateTiles from '../tiles/tileUtils';

export default {
    name: 'players-container',
    props: {
        players: Array,
        gameState: Object,
        socket: Object,
        username: {
            type: String,
            default: ''
        },
    },
    created() {
        this.socket.on('username', ({ username, roomCode }) => {
            this.currentUser = username;
            document.cookie = `kemet=${username}:${roomCode}`;
        });

        this.socket.on('rejoinGame', ({ username }) => {
            this.currentUser = username;
        });
    },
    data() {
        return {
            usernames: this.players,
            currentUser: this.username,
            changingUser: false,
            tileData: generateTiles(),
            tileClass: function(id) {
                return {
                    'player-tile': true,
                    'red-tile': id >= 0 && id <= 15,
                    'blue-tile': id >= 16 && id <= 31,
                    'white-tile': id >= 32,
                };
            },
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
        font-family: 'Feijoa Italic';
        src: url('../../assets/fonts/Feijoa-MediumItalic.woff');
    }

    .players-container {
        background-color: #ffe59f;
        height: 30vh;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }

    .players-list {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
    }

    .change-player {
        background-color: #fdc631;
    }

    .top-nav {
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;
    }

    .player-tile { margin-bottom: 0.5rem; }
    .red-tile { color: #fb4c51; }
    .blue-tile { color: #2378b9; }
    .white-tile { color: #787878; }

    .current-player-tiles {
        overflow-y: scroll;
    }

    .tile-info-desc {
        font-family: 'Feijoa Italic';
    }
</style>


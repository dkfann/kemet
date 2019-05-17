<template>
    <div class="players-container">
        <div class="top-nav" v-if="!changingUser">
            <div class="current-player">{{ currentUser }}</div>
            <div class="change-player" @click="showChangeUserList">Change Player</div>
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
    props: ['players', 'gameState', 'socket'],
    created() {
        this.socket.on('username', (data) => {
            this.currentUser = data.username;
        });
    },
    data() {
        return {
            usernames: this.players,
            currentUser: '',
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
        font-family: 'Chronicle';
        src: url('../../assets/fonts/ChronicleDisp-Black.otf');
    }

    @font-face {
        font-family: 'Feijoa Italic';
        src: url('../../assets/fonts/Feijoa-MediumItalic.woff');
    }

    .players-container {
        background-color: #ffe59f;
        height: 20vh;
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
    }

    .players-list {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
    }

    .change-user {
        text-align: right;
    }

    .top-nav {
        /* display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr; */
        display: flex;
        margin-bottom: 1rem;
        justify-content: space-between;
    }

    .red-tile { color: red; }
    .blue-tile { color: blue; }
    .white-tile { color: white; }

    .current-player-tiles {
        overflow-y: scroll;
    }

    .tile-info-desc {
        font-family: 'Feijoa Italic';
    }

</style>


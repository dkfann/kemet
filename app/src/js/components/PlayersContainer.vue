<template>
    <div class="players-container">
        <div class="current-player">
            {{ currentUser }}
        </div>
        <div class="current-player-tiles" v-if="!changingUser" v-for="tile in getPlayerTiles(currentUser)">
            {{ tile.key }}
        </div>
        <div class="change-user-list" v-if="changingUser" v-for="username in usernames">
            <div class="change-to-username" @click="changeToUser(username)">
                {{ username }}
            </div>
        </div>
        <div class="change-user" @click="showChangeUserList">
            Change User
        </div>
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
        justify-content: space-between;
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
</style>


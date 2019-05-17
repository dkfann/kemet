const { getInitialGameState } = require('./kemetTiles');

class GameHandler {
    constructor({ socketIOServer, usernames }) {
        this.socketIOServer = socketIOServer;
        this.gameState = getInitialGameState(usernames);
    }

    applySelectTileToGameState({ tileId, owner }) {
        if (!this.gameState[owner]) return;

        this.gameState[owner].push(tileId);
    }

    applyDeselectTileToGameState({ tileId, owner }) {
        if (!this.gameState[owner]) return;

        this.gameState[owner] = this.gameState[owner].filter(id => tileId !== id);
    }
}

module.exports = {
    GameHandler,
};

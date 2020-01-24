const getInitialGameState = (usernames) => {
    return {
        // Takes all the usernames and returns an object
        // with the usernames as keys with empty arrays as values
        ...usernames.reduce((acc, username) => {
            return {
                ...acc,
                [username]: [],
            }
        }, {}),
        logs: [],
    };
};

class GameHandler {
    constructor({ socketIOServer, usernames }) {
        this.socketIOServer = socketIOServer;
        this.gameState = getInitialGameState(usernames);
    }

    applySelectTileToGameState({ tileId, owner }) {
        if (!this.gameState[owner]) return;

        this.gameState[owner].push(tileId);
        this.gameState.logs.push({ owner, tileId, type: 'select' })
    }

    applyDeselectTileToGameState({ tileId, owner }) {
        if (!this.gameState[owner]) return;

        this.gameState[owner] = this.gameState[owner].filter(id => tileId !== id);
        this.gameState.logs.push({ owner, tileId, type: 'return' })
    }
}

module.exports = {
    GameHandler,
};

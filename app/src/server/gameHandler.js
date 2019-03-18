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
}

// const gameHandler = ({ socketIOServer }) => {
//     const gameState = initialGameState;

//     function applySelectItemToGameState({ item, owner }) {
//         gameState.redTiles = gameState.redTiles.map((stuff) => {
//             if (stuff.key === item.key) {
//                 return {
//                     ...item,
//                     owner,
//                 };
//             }

//             return stuff;
//         });
//     }

//     function _init() {

//     }

//     return {
//         gameState,
//         applySelectItemToGameState,
//     };
// }

module.exports = {
    GameHandler,
};

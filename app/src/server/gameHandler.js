const { getInitialGameState } = require('./kemetTiles');

class GameHandler {
    constructor({ socketIOServer }) {
        this.socketIOServer = socketIOServer;
        this.gameState = getInitialGameState();
    }

    applySelectItemToGameState({ item, owner }) {
        this.gameState.redTiles = this.gameState.redTiles.map((currTile) => {
            if (currTile.key === item.key) {
                return {
                    ...currTile,
                    owner,
                };
            }

            return currTile;
        });
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

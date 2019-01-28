const { getInitialGameState } = require('./kemetTiles');

class GameHandler {
    constructor({ socketIOServer }) {
        console.log('in the game handler constructor');
        this.socketIOServer = socketIOServer;
        this.gameState = getInitialGameState();
    }

    applySelectItemToGameState({ item, owner }) {
        this.gameState.redTiles = this.gameState.redTiles.map((currTiles) => {
            if (currTiles.key === item.key) {
                return {
                    ...item,
                    owner,
                };
            }

            return item;
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

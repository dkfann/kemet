const { initialGameState } = require('./kemetTiles');

const gameHandler = ({ socketIOServer }) => {
    const gameState = initialGameState;

    function applySelectItemToGameState({ item, owner }) {
        gameState.redTiles = gameState.redTiles.map((stuff) => {
            if (stuff.key === item.key) {
                return {
                    ...item,
                    owner,
                };
            }

            return stuff;
        });
    }

    function _init() {

    }

    return {
        gameState,
        applySelectItemToGameState,
    };
}

module.exports = {
    gameHandler,
}

const gameHandler = ({ socketIOServer }) => {
    const gameState = {
        test: [
            {
                val: 1,
                owner: 'None',
            },
            {
                val: 2,
                owner: 'None',
            },
            {
                val: 3,
                owner: 'None',
            },
        ],
    };

    function applySelectItemToGameState({ item, owner }) {
        gameState.test = gameState.test.map((stuff) => {
            if (stuff.val === item.val) {
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

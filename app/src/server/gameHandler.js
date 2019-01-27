const gameHandler = ({ socketIOServer }) => {
    const gameState = {
        // a: {
        //     val: 1,
        //     owner: null,
        // },
        // b: {
        //     val: 2,
        //     owner: null,
        // },
        // c: {
        //     val: 3,
        //     owner: null,
        // },
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

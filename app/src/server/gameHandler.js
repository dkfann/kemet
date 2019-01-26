const gameHandler = ({ socketIOServer }) => {
    const gameState = {
        a: {
            val: 1,
        },
        b: {
            val: 2,
        },
        c: {
            val: 3,
        },
    };

    function _init() {
        socketIOServer.on('selectedItem', ({ item }) => {
            console.log(item);
        });
    }

    return gameState;
}

module.exports = {
    gameHandler,
}
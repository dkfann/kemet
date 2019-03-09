const imagePath = '../assets/images';
const getInitialGameState = () => {
    return {
        redTiles: [
            {
                key: 'charge_1',
                img: `${imagePath}/charge_1.png`,
                id: 0,
                owner: null,
            },
            {
                key: 'charge_2',
                img: `${imagePath}/charge_2.png`,
                id: 1,
                owner: null,
            },
            {
                key: 'stargate',
                img: `${imagePath}/stargate.png`,
                id: 2,
                owner: null,
            },
            {
                key: 'godspeed',
                img: `${imagePath}/godspeed.png`,
                id: 3,
                owner: null,
            },
        ],
    }
};

module.exports = {
    getInitialGameState,
};

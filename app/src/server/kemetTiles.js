const imagePath = '../assets/images';
const getInitialGameState = () => {
    return {
        redTiles: [
            {
                key: 'charge_1',
                img: `${imagePath}/charge_1.png`,
            },
            {
                key: 'charge_2',
                img: `${imagePath}/charge_2.png`,
            },
            {
                key: 'stargate',
                img: `${imagePath}/stargate.png`,
            },
            {
                key: 'godspeed',
                img: `${imagePath}/godspeed.png`,
            },
        ],
    }
};

module.exports = {
    getInitialGameState,
};

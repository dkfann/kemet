const imagePath = '../assets/images';

export default function generateTiles() {
    const tiles = {
        redTiles: {
            0: {
                title: 'Charge 1',
                img: `${imagePath}/charge_1.png`,
                id: 0,
            },
            1: {
                title: 'Charge 2',
                img: `${imagePath}/charge_2.png`,
                id: 1,
            },
            2: {
                title: 'Godspeed',
                img: `${imagePath}/godspeed.png`,
                id: 2,
            },
            3: {
                title: 'Stargate',
                img: `${imagePath}/stargate.png`,
                id: 3,
            },
        },
        blueTiles: {

        },
        whiteTiles: {

        }
    };

    Object.keys(tiles.redTiles).forEach((key) => {
        tiles.redTiles[key].owner = null;
    });

    return tiles;
}

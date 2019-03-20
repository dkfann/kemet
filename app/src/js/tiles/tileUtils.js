const imagePath = '../assets/images';

export default function generateTiles() {
    const tiles = {
        redTiles: {
            ...generateRedTiles(),
            // level_1: {
            //     0: {
            //         title: 'Charge 1',
            //         img: `${imagePath}/charge_1.png`,
            //     },
            //     1: {
            //         title: 'Charge 2',
            //         img: `${imagePath}/charge_2.png`,
            //     },
            //     2: {
            //         title: 'Godspeed',
            //         img: `${imagePath}/godspeed.png`,
            //     },
            //     3: {
            //         title: 'Stargate',
            //         img: `${imagePath}/stargate.png`,
            //     },
            // },
            // level_2: {
            //     4: {
            //         title: 'Carnage',
            //         img: `${imagePath}/carnage.png`,
            //     },
            //     5: {
            //         title: 'Offensive Strategy',
            //         img: `${imagePath}/offensive_strategy.png`,
            //     },
            //     6: {
            //         title: 'Open Gates',
            //             img: `${imagePath}/open_gates.png`
            //     },
            //     7: {
            //         title: 'Teleport',
            //             img: `${imagePath}/teleport.png`,
            //                 },
            // },
            // level_3: {
            //     8: {
            //         title: 'Royal Scarab',
            //         img: `${imagePath}/royal_scarab.png`,
            //     },
            //     9: {
            //         title: 'Blades of Neith',
            //         img: `${imagePath}/blades_of_neith.png`,
            //     },
            //     10: {
            //         title: 'Divine Wound',
            //         img: `${imagePath}/divine_wound.png`,
            //     },
            //     11: {
            //         title: 'Victory Point',
            //         img: `${imagePath}/victory_point_1.png`,
            //     },
            // },
            // level_4: {
            //     12: {
            //         title: 'Giant Scorpion',
            //         img: `${imagePath}/giant_scorpion.png`,
            //     },
            //     13: {
            //         title: 'Initiative',
            //         img: `${imagePath}/initiative.png`,
            //     },
            //     14: {
            //         title: 'Phoenix',
            //         img: `${imagePath}/phoenix.png`,
            //     },
            //     15: {
            //         title: 'Act of God',
            //         img: `${imagePath}/act_of_god_1.png`,
            //     },
            // },
        },
        blueTiles: {

        },
        whiteTiles: {

        }
    };

    Object.keys(tiles.redTiles).forEach((key) => {
        tiles.redTiles[key].owner = null;
        tiles.redTiles[key].id = key;
    });

    return tiles;
}

export function generateRedTiles() {
    const redTiles = {
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
            4: {
                title: 'Carnage',
                img: `${imagePath}/carnage.png`,
                id: 4,
            },
            5: {
                title: 'Offensive Strategy',
                img: `${imagePath}/offensive_strategy.png`,
                id: 5,
            },
            6: {
                title: 'Open Gates',
                img: `${imagePath}/open_gates.png`,
                id: 6
            },
            7: {
                title: 'Teleport',
                img: `${imagePath}/teleport.png`,
                id: 7,
            },
            8: {
                title: 'Royal Scarab',
                img: `${imagePath}/royal_scarab.png`,
                id: 8,
            },
            9: {
                title: 'Blades of Neith',
                img: `${imagePath}/blades_of_neith.png`,
                id: 9,
            },
            10: {
                title: 'Divine Wound',
                img: `${imagePath}/divine_wound.png`,
                id: 10,
            },
            11: {
                title: 'Victory Point',
                img: `${imagePath}/victory_point_1.png`,
                id: 11,
            },
            12: {
                title: 'Giant Scorpion',
                img: `${imagePath}/giant_scorpion.png`,
                id: 12,
            },
            13: {
                title: 'Initiative',
                img: `${imagePath}/initiative.png`,
                id: 13,
            },
            14: {
                title: 'Phoenix',
                img: `${imagePath}/phoenix.png`,
                id: 14,
            },
            15: {
                title: 'Act of God',
                img: `${imagePath}/act_of_god_1.png`,
                id: 15,
            },
    };

    // Object.keys(redTiles).forEach((key) => {
    //     redTiles[key].owner = null;
    //     redTiles[key].id = key;
    // });

    return redTiles;
}

export function generateTilesByColorAndLevel({ color, level}) {
    let tiles = null;
    switch (color) {
        case 'red':
            tiles = generateRedTiles();
            break;
        case 'blue':
            break;
        case 'white':
            break;
        default:
            break;
    }

    let startId = (level - 1) * 4
    const endId = startId + 3;
    let idsToGrab = [];
    while (startId <= endId) {
        idsToGrab.push(startId++);
    }

    return idsToGrab.map(id => tiles[id]);
}
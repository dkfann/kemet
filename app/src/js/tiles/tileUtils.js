const imagePath = '../assets/images';
const RED_ID_ADJUSTMENT = 0;
const BLUE_ID_ADJUSTMENT = 16;
const WHTIE_ID_ADJUSTMENT = 32;

export default function generateTiles() {
    const tiles = {
        ...generateRedTiles(),
        ...generateBlueTiles(),
        ...generateWhiteTiles(),
    };

    Object.keys(tiles).forEach((key) => {
        tiles[key].owner = null;
    });

    return tiles;
}

export function generateRedTiles() {
    const redTiles = {
            0: {
                title: 'Charge 1',
                img: `${imagePath}/charge_1.png`,
                id: 0,
                desc: '+1 Strength in Battle when attacking',
            },
            1: {
                title: 'Charge 2',
                img: `${imagePath}/charge_2.png`,
                id: 1,
                desc: '+1 Strength in Battle when attacking',
            },
            2: {
                title: 'Godspeed',
                img: `${imagePath}/godspeed.png`,
                id: 2,
                desc: '+1 Movement Capacity when using movement',
            },
            3: {
                title: 'Stargate',
                img: `${imagePath}/stargate.png`,
                id: 3,
                desc: 'Teleport for -1 Ankh when using movement',
            },
            4: {
                title: 'Carnage',
                img: `${imagePath}/carnage.png`,
                id: 4,
                desc: '+1 Damage In Battle',
            },
            5: {
                title: 'Offensive Strategy',
                img: `${imagePath}/offensive_strategy.png`,
                id: 5,
                desc: 'Take back discarded battle cards and replace one with special +3 Strength / 3 Damage',
            },
            6: {
                title: 'Open Gates',
                img: `${imagePath}/open_gates.png`,
                id: 6,
                desc: 'Ignore effect of walls',
            },
            7: {
                title: 'Teleport',
                img: `${imagePath}/teleport.png`,
                id: 7,
                desc: 'Teleport your troops from obelisk when using movement',
            },
            8: {
                title: 'Royal Scarab',
                img: `${imagePath}/royal_scarab.png`,
                id: 8,
                desc: 'Linked troops: +2 Movement, +2 Strength',
            },
            9: {
                title: 'Blades of Neith',
                img: `${imagePath}/blades_of_neith.png`,
                id: 9,
                desc: '+1 Strength in battle',
            },
            10: {
                title: 'Divine Wound',
                img: `${imagePath}/divine_wound.png`,
                id: 10,
                desc: 'In battle after cards revealed, +1 Strength per discarded DI',
            },
            11: {
                title: 'Victory Point',
                img: `${imagePath}/victory_point_red.png`,
                id: 11,
                desc: '+1 VP',
            },
            12: {
                title: 'Giant Scorpion',
                img: `${imagePath}/giant_scorpion.png`,
                id: 12,
                desc: 'Linked troops: +1 Movement, +2 Strength, +2 Damage',
            },
            13: {
                title: 'Initiative',
                img: `${imagePath}/initiative.png`,
                id: 13,
                desc: 'When attacking, destroy 2 units before battle starts',
            },
            14: {
                title: 'Phoenix',
                img: `${imagePath}/phoenix.png`,
                id: 14,
                desc: 'Linked troops: +1 Movement, +2 Strength, troops ignore walls',
            },
            15: {
                title: 'Act of God',
                img: `${imagePath}/act_of_god_red.png`,
                id: 15,
                desc: 'Take additional action token',
            },
    };

    // Object.keys(redTiles).forEach((key) => {
    //     redTiles[key].owner = null;
    //     redTiles[key].id = key;
    // });

    return redTiles;
}

function generateBlueTiles() {
    const blueTiles = {
        16: {
            title: 'Recruiting Scribe 1',
            img: `${imagePath}/recruiting_scribe_1.png`,
            id: 16,
            desc: 'Recruit gives +2 units',
        },
        17: {
            title: 'Recruiting Scribe 2',
            img: `${imagePath}/recruiting_scribe_2.png`,
            id: 17,
            desc: 'Recruit gives +2 units',
        },
        18: {
            title: 'Defense 1',
            img: `${imagePath}/defense_1.png`,
            id: 18,
            desc: '+1 Strength when defending',
        },
        19: {
            title: 'Defense 2',
            img: `${imagePath}/defense_2.png`,
            id: 19,
            desc: '+1 Strength when defending',
        },
        20: {
            title: 'Legion',
            img: `${imagePath}/legion.png`,
            id: 20,
            desc: 'Max troops is 7',
        },
        21: {
            title: 'Ancestral Elephant',
            img: `${imagePath}/ancestral_elephant.png`,
            id: 21,
            desc: 'Linked troops: +1 Movement, +1 Strength, +1 Protection',
        },
        22: {
            title: 'Defensive Strategy',
            img: `${imagePath}/defensive_strategy.png`,
            id: 22,
            desc: 'Take back discarded battle cards, replace one with special +3 Strength / 3 Protection',
        },
        23: {
            title: 'Deep Desert Snake',
            img: `${imagePath}/deep_desert_snake.png`,
            id: 23,
            desc: 'Linked troops: +1 Movement, cancel out other creature effects in battle',
        },
        24: {
            title: 'Shield of Neith',
            img: `${imagePath}/shield_of_neith.png`,
            id: 24,
            desc: '+1 Protection in battle',
        },
        25: {
            title: 'Defensive Victory',
            img: `${imagePath}/defensive_victory.png`,
            id: 25,
            desc: 'Winning battle as defender gains you +1 VP',
        },
        26: {
            title: 'Prescience',
            img: `${imagePath}/prescience.png`,
            id: 26,
            desc: 'In battle, opponent must show battle cards before you play yours',
        },
        27: {
            title: 'Victory Point',
            img: `${imagePath}/victory_point_blue.png`,
            id: 27,
            desc: '+1 VP',
        },
        28: {
            title: 'Reinforcements',
            img: `${imagePath}/reinforcements.png`,
            id: 28,
            desc: 'During Night phase, may add 4 units to troop and/or your city',
        },
        29: {
            title: 'Sphinx',
            img: `${imagePath}/sphinx.png`,
            id: 29,
            desc : 'Linked troop: +2 Strength, +1 VP',
        },
        30: {
            title: 'Divine Will',
            img: `${imagePath}/divine_will.png`,
            id: 30,
            desc: 'Take golden Action token, must be used at top level space',
        },
        31: {
            title: 'Act of God',
            img: `${imagePath}/act_of_god_blue.png`,
            id: 31,
            desc: 'Take silver action token',
        },
    };

    return blueTiles;
}

function generateWhiteTiles() {
    const whiteTiles = {
        32: {
            title: 'Priest 1',
            img: `${imagePath}/priest_1.png`,
            id: 32,
        },
        33: {
            title: 'Priest 2',
            img: `${imagePath}/priest_2.png`,
            id: 33,
        },
        34: {
            title: 'Priestess 1',
            img: `${imagePath}/priestess_1.png`,
            id: 34,
        },
        35: {
            title: 'Priestess 2',
            img: `${imagePath}/priestess_2.png`,
            id: 35,
        },
        36: {
            title: 'Slaves',
            img: `${imagePath}/slaves.png`,
            id: 36,
        },
        37: {
            title: 'High Priest',
            img: `${imagePath}/high_priest.png`,
            id: 37,
        },
        38: {
            title: 'Crusade',
            img: `${imagePath}/crusade.png`,
            id: 38,
        },
        39: {
            title: 'Divine Boon',
            img: `${imagePath}/divine_boon.png`,
            id: 39,
        },
        40: {
            title: 'Hand of God',
            img: `${imagePath}/hand_of_god.png`,
            id: 40,
        },
        41: {
            title: 'Vision',
            img: `${imagePath}/vision.png`,
            id: 41,
        },
        42: {
            title: 'Holy War',
            img: `${imagePath}/holy_war.png`,
            id: 42,
        },
        43: {
            title: 'Victory Point',
            img: `${imagePath}/victory_point_white.png`,
            id: 43,
        },
        44: {
            title: 'Priest Of Ra',
            img: `${imagePath}/priest_of_ra.png`,
            id: 44,
        },
        45: {
            title: 'Priest of Amon',
            img: `${imagePath}/priest_of_amon.png`,
            id: 45,
        },
        46: {
            title: 'The Mummy',
            img: `${imagePath}/the_mummy.png`,
            id: 46,
        },
        47: {
            title: 'Act of God',
            img: `${imagePath}/act_of_god_white.png`,
            id: 47,
        },
    };

    return whiteTiles;
}

export function generateTilesByColorAndLevel({ color, level}) {
    let tiles = null;
    let color_id_adjustment = null;
    switch (color) {
        case 'red':
            tiles = generateRedTiles();
            color_id_adjustment = RED_ID_ADJUSTMENT;
            break;
        case 'blue':
            tiles = generateBlueTiles();
            color_id_adjustment = BLUE_ID_ADJUSTMENT;
            break;
        case 'white':
            tiles = generateWhiteTiles();
            color_id_adjustment = WHTIE_ID_ADJUSTMENT;
            break;
        default:
            break;
    }

    let startId = (level - 1) * 4 + color_id_adjustment;
    const endId = startId + 3;
    let idsToGrab = [];
    while (startId <= endId) {
        idsToGrab.push(startId++);
    }

    return idsToGrab.map(id => tiles[id]);
}
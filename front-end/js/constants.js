
/* Consts */

const DEBUG = false;

const CANVAS_BORDER = 4;

const TILE_WIDTH = 71;
const TILE_HEIGHT = 53;

const GATEWAY_WIDTH = 95;
const GATEWAY_HEIGHT = 95;

const DOOR_WIDTH = 95;
const DOOR_HEIGHT = 95;

const STAIRS_WIDTH = 115;
const STAIRS_HEIGHT = 70;

const DEFAULT_PERCENT = 1;
const DEFAULT_FONT_FAMILY = 'bold 16px monospace';
const DEFAULT_FONT_COLOR = '#523e07';

const LINKS = {
    none: { x: 0, y: 0 },
    right: { x: 36, y:21 },
    bottom: { x: -36, y:21 }
};

const ROOM_SIZE = {
    /*** HALLWAY ***/
    hallway: {
        s1x3: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,1,1) }
        ],
        s1x4: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,1,1) }
        ],
        s1x5: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,1,1) }
        ],
        s1x6: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,1,0,1) },
            { index: '6', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,1,1) }
        ],
        s3x1: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,1,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,1,0) }
        ],
        s4x1: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,1,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,1,0) }
        ],
        s5x1: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,1,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.right }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,1,0) }
        ],
        s6x1: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,1,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.right }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(1,0,1,0) },
            { index: '6', origin: { baseIndex: 4, link: LINKS.right }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,1,0) }
        ]
    },

    /*** TINY ***/
    tiny: {
        s2x2: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '3', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '4', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ]
    },

    /*** SMALL ***/
    small: {
        s3x2: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '4', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '5', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '6', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s2x3: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '3', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '4', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '5', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '6', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s3x3: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '4', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '5', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '6', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '7', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '8', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '9', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ]
    },

    /*** MEDIUM ***/
    medium: {
        s4x2: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '5', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '6', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '7', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '8', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s4x3: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '5', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '6', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '7', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '8', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '9', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '10', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '11', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '12', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s4x4: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '5', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '6', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '7', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '8', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '9', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '10', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '11', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '12', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '13', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '14', origin: { baseIndex: 9, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '15', origin: { baseIndex: 10, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '16', origin: { baseIndex: 11, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s2x4: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '3', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '4', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '5', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '6', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '7', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '8', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s3x4: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '4', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '5', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '6', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '7', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '8', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '9', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '10', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '11', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '12', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ]
    },

    /*** BIG ***/
    big: {
        s5x3: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '6', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '7', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '8', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '9', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '10', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '11', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '12', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '13', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '14', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '15', origin: { baseIndex: 9, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s5x4: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '6', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '7', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '8', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '9', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '10', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '11', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '12', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '13', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '14', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '15', origin: { baseIndex: 9, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '16', origin: { baseIndex: 10, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '17', origin: { baseIndex: 11, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '18', origin: { baseIndex: 12, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '19', origin: { baseIndex: 13, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '20', origin: { baseIndex: 14, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s4x5: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '5', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '6', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '7', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '8', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '9', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '10', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '11', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '12', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '13', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '14', origin: { baseIndex: 9, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '15', origin: { baseIndex: 10, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '16', origin: { baseIndex: 11, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '17', origin: { baseIndex: 12, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '18', origin: { baseIndex: 13, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '19', origin: { baseIndex: 14, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '20', origin: { baseIndex: 15, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ],
        s5x5: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },
            { index: '6', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '7', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '8', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '9', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '10', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '11', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '12', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '13', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '14', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '15', origin: { baseIndex: 9, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '16', origin: { baseIndex: 10, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '17', origin: { baseIndex: 11, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '18', origin: { baseIndex: 12, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '19', origin: { baseIndex: 13, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '20', origin: { baseIndex: 14, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },
            { index: '21', origin: { baseIndex: 15, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '22', origin: { baseIndex: 16, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '23', origin: { baseIndex: 17, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '24', origin: { baseIndex: 18, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '25', origin: { baseIndex: 19, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ]
    },

    /*** VERY BIG ***/
    veryBig: {
        s7x7: [
            { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,1) },
            { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '5', origin: { baseIndex: 3, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '6', origin: { baseIndex: 4, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,0,0,0) },
            { index: '7', origin: { baseIndex: 5, link: LINKS.right }, acceptGateway: true, acceptDoor: true, acceptExit: false, borders: makeBorders(1,1,0,0) },

            { index: '8', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '9', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '10', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '11', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '12', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '13', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '14', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },

            { index: '15', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '16', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '17', origin: { baseIndex: 9, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '18', origin: { baseIndex: 10, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '19', origin: { baseIndex: 11, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '20', origin: { baseIndex: 12, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '21', origin: { baseIndex: 13, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },

            { index: '22', origin: { baseIndex: 14, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '23', origin: { baseIndex: 15, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '24', origin: { baseIndex: 16, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '25', origin: { baseIndex: 17, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '26', origin: { baseIndex: 18, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '27', origin: { baseIndex: 19, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '28', origin: { baseIndex: 20, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },

            { index: '29', origin: { baseIndex: 21, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '30', origin: { baseIndex: 22, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '31', origin: { baseIndex: 23, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '32', origin: { baseIndex: 24, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '33', origin: { baseIndex: 25, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '34', origin: { baseIndex: 26, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '35', origin: { baseIndex: 27, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },

            { index: '36', origin: { baseIndex: 28, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,0,0,1) },
            { index: '37', origin: { baseIndex: 29, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '38', origin: { baseIndex: 30, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '39', origin: { baseIndex: 31, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '40', origin: { baseIndex: 32, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '41', origin: { baseIndex: 33, link: LINKS.bottom }, acceptGateway: false, acceptDoor: false, acceptExit: false, borders: makeBorders(0,0,0,0) },
            { index: '42', origin: { baseIndex: 34, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: false, borders: makeBorders(0,1,0,0) },

            { index: '43', origin: { baseIndex: 35, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,1) },
            { index: '44', origin: { baseIndex: 36, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '45', origin: { baseIndex: 37, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '46', origin: { baseIndex: 38, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '47', origin: { baseIndex: 39, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '48', origin: { baseIndex: 40, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,0,1,0) },
            { index: '49', origin: { baseIndex: 41, link: LINKS.bottom }, acceptGateway: false, acceptDoor: true, acceptExit: true, borders: makeBorders(0,1,1,0) }
        ]
    }
};

const ROOMS = [
    /*** hallway 0-3 ***/
    ROOM_SIZE.hallway.s1x3, ROOM_SIZE.hallway.s1x4, ROOM_SIZE.hallway.s1x5, ROOM_SIZE.hallway.s1x6,
    /*** hallway 4-7 ***/
    ROOM_SIZE.hallway.s3x1, ROOM_SIZE.hallway.s4x1, ROOM_SIZE.hallway.s5x1, ROOM_SIZE.hallway.s6x1,
    /*** tiny 8 ***/
    ROOM_SIZE.tiny.s2x2,
    /*** small 9-11 ***/
    ROOM_SIZE.small.s3x2, ROOM_SIZE.small.s2x3, ROOM_SIZE.small.s3x3,
    /*** medium 12-16 ***/
    ROOM_SIZE.medium.s4x2, ROOM_SIZE.medium.s4x3, ROOM_SIZE.medium.s4x4, ROOM_SIZE.medium.s2x4, ROOM_SIZE.medium.s3x4,
    /*** big 17-20 ***/
    ROOM_SIZE.big.s5x3, ROOM_SIZE.big.s5x4, ROOM_SIZE.big.s4x5, ROOM_SIZE.big.s5x5,
    /*** veryBig 21 ***/
    ROOM_SIZE.veryBig.s7x7
];

const DOOR_TYPE = {
    top: { x: 9, y: -73 },
    left: { x: -32, y: -74 },
};

const MAP_SIZE = {
    // TO-DO
};

const MAP_TYPES = {
    home: 0,
    cave: 1,
    dungeon: 2,
    tower: 3,
    castle: 4
}

const FURNITURE_TYPES = [
    {
        image: 'furniture_bookshelf_1x3',
        adjustPosition: { x: 18, y: -108 },
        size: { width: 105, height: 140 },
        tiles: { width: 1, height: 3 },
        drawable: { first: false, last: false, gateway: true, onlyWall: true },
        types: [ MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
    {
        image: 'furniture_bookshelf_3x1',
        adjustPosition: { x: -48, y: -104 },
        size: { width: 105, height: 140 },
        tiles: { width: 3, height: 1 },
        drawable: { first: false, last: false, gateway: true, onlyWall: true },
        types: [ MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
    {
        image: 'furniture_closed_chest_1x2',
        adjustPosition: { x: 7, y: -37 },
        size: { width: 100, height: 72 },
        tiles: { width: 1, height: 2 },
        drawable: { first: true, last: true, gateway: true, onlyWall: false },
        types: [ MAP_TYPES.home, MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
    {
        image: 'furniture_closed_chest_2x1',
        adjustPosition: { x: -40, y: -40 },
        size: { width: 100, height: 72 },
        tiles: { width: 2, height: 1 },
        drawable: { first: true, last: true, gateway: true, onlyWall: false },
        types: [ MAP_TYPES.home, MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
    {
        image: 'furniture_open_chest_1x2',
        adjustPosition: { x: 7, y: -37 },
        size: { width: 100, height: 72 },
        tiles: { width: 1, height: 2 },
        drawable: { first: true, last: true, gateway: true, onlyWall: false },
        types: [ MAP_TYPES.home, MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
    {
        image: 'furniture_open_chest_2x1',
        adjustPosition: { x: -40, y: -40 },
        size: { width: 100, height: 72 },
        tiles: { width: 2, height: 1 },
        drawable: { first: true, last: true, gateway: true, onlyWall: false },
        types: [ MAP_TYPES.home, MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
    {
        image: 'furniture_closed_reinforced_chest_1x2',
        adjustPosition: { x: -4, y: -45 },
        size: { width: 103, height: 81 },
        tiles: { width: 1, height: 2 },
        drawable: { first: false, last: true, gateway: false, onlyWall: false },
        types: [ MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
    {
        image: 'furniture_closed_reinforced_chest_2x1',
        adjustPosition: { x: -34, y: -48 },
        size: { width: 103, height: 81 },
        tiles: { width: 2, height: 1 },
        drawable: { first: true, last: true, gateway: true, onlyWall: false },
        types: [ MAP_TYPES.cave, MAP_TYPES.dungeon, MAP_TYPES.tower, MAP_TYPES.castle ]
    },
];

/* Conts Auxiliary functions */

function makeBorders(top,right,bottom,left) {
    return { top: top, right: right, bottom: bottom, left: left };
}

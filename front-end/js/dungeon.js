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

/* User Interface */
let SHOW_INDEXES = DEBUG;
let SHOW_ALL_ROOMS = DEBUG;
let NUMBER_OF_FLOOR = 10;
let NUMBER_OF_LAST_FLOOR = 10;

let DOORS = [];

/* Model */
function Mouse() {
    this.dragging = false;
    this.memory = undefined;
    this.start_x = 0;
    this.start_y = 0;
    this.x = 0;
    this.y = 0;
}

Mouse.prototype.mousedown = function(x,y) {
    checkDoorClick(x,y);
    this.dragging = true;
    this.start_x = x;
    this.start_y = y;
}

Mouse.prototype.mousemove = function(x,y,callback) {
    if (this.dragging) {
        this.x = x;
        this.y = y;

        let diff = this.diff();
        callback(diff.x,diff.y);
    }
}

Mouse.prototype.mouseup = function() {
    this.memory = this.diff();
    this.dragging = false;
    this.start_x = 0;
    this.start_y = 0;
    this.x = 0;
    this.y = 0;
}

Mouse.prototype.diff = function() {
    let diff = {
        x: 0, y: 0
    };
    if (this.dragging && this.x>0 && this.y>0) {
        diff.x = Math.round( this.start_x - this.x );
        diff.y = Math.round( this.start_y - this.y );
    }
    if (this.memory !== undefined) {
        diff.x = diff.x + this.memory.x;
        diff.y = diff.y + this.memory.y;
    }
    return diff;
}

function Image(context,file,width,height,percent=1) {
    this.context = context;
    this.file=file;
    this.width = width * percent;
    this.height = height * percent;
}

Image.prototype.render = function(x,y) {
    this.context.drawImage(
        document.getElementById(this.file),
        x,y,
        this.width,
        this.height
    );
}

function Passage(link) {
    this.x = 0;
    this.y = 0;
    this.link = link;
}

Passage.prototype.setPosition = function(x,y) {
    this.x = x + this.link.x;
    this.y = y + this.link.y;
}

Passage.prototype.isBottom = function() {
    return (this.link.x === LINKS.bottom.x) && (this.link.y === LINKS.bottom.y);
}

Passage.prototype.isRight = function() {
    return (this.link.x === LINKS.right.x) && (this.link.y === LINKS.right.y);
}

function Door(context,type,open) {
    this.context = context;
    this.type = type;
    this.open = false;
    this.images = [];
    this.setArea(0,0);

    if (this.type === DOOR_TYPE.top) {
        this.images.push(new Image(this.context,'door-closed-top',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
    } else if (this.type === DOOR_TYPE.left) {
        this.images.push(new Image(this.context,'door-closed-left',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
    }
}

Door.prototype.setArea = function(x,y) {
    this.area = {
        a: {x: x, y: y},
        b: {x: x + DOOR_WIDTH, y: y + DOOR_HEIGHT}
    };
}

Door.prototype.click = function(x,y) {
    if (this.open) return false;

    if ( (x >= this.area.a.x) && (x <= this.area.b.x) ) {
        if ( (y >= this.area.a.y) && (y <= this.area.b.y) ) {
            this.updateImages();
            return true;
        }
    }
}

Door.prototype.updateImages = function() {
    this.open = true;
    this.images = [];
    if (this.type === DOOR_TYPE.top) {
        this.images.push(new Image(this.context,'door-open-top-border',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        this.images.push(new Image(this.context,'door-open-top-transparent',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
    } else if (this.type === DOOR_TYPE.left) {
        this.images.push(new Image(this.context,'door-open-left-border',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        this.images.push(new Image(this.context,'door-open-left-transparent',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
    }
}

Door.prototype.render = function(x,y) {
    if (SHOW_ALL_ROOMS) this.updateImages();
    let type = this.type;
    this.setArea(x+type.x,y+type.y);
    this.images.forEach(function(image){
        image.render(x+type.x,y+type.y);
    });
}

function Tile(context,scaffold) {
    Image.call(this, context,'tile',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    this.index = scaffold.index;
    this.origin = scaffold.origin;
    this.memory = { x:0, y:0 };
    this.inputGateway = undefined;
    this.exitGateway = undefined;
    this.acceptGateway = scaffold.acceptGateway;
    this.acceptDoor = scaffold.acceptDoor;
    this.acceptExit = scaffold.acceptExit;
    this.gatewayStairs = scaffold.gatewayStairs;
    this.exitStairs = scaffold.exitStairs;
    this.borders = createTileBorders(context,scaffold);
    this.passage = undefined;
}

Tile.prototype.setInputGateway = function() {
    if (this.gatewayStairs) {
        this.inputGateway = new Image(
            this.context,
            'stairs',
            STAIRS_WIDTH,
            STAIRS_HEIGHT,
            DEFAULT_PERCENT
        );
    } else {
        this.inputGateway = new Image(
            this.context,
            'gateway',
            GATEWAY_WIDTH,
            GATEWAY_HEIGHT,
            DEFAULT_PERCENT
        );
    }
}

Tile.prototype.setExitGateway = function() {
    if (this.exitStairs) {
        this.exitGateway = new Image(
            this.context,
            'stairs',
            STAIRS_WIDTH,
            STAIRS_HEIGHT,
            DEFAULT_PERCENT
        );
    } else {
        this.exitGateway = new Image(
            this.context,
            'gateway',
            GATEWAY_WIDTH,
            GATEWAY_HEIGHT,
            DEFAULT_PERCENT
        );
    }
}

Tile.prototype.createDoor = function(type) {
    this.door = new Door(this.context,type);
    DOORS.push(this.door);
}

Tile.prototype.createPassage = function(link) {
    this.passage = new Passage(link);
    return this.passage;
}

Tile.prototype.render = function(x,y,open,next) {
    if (open && (this.inputGateway !== undefined) && this.gatewayStairs) {
        this.inputGateway.render(x+36,y-22);
    }

    if (open) Image.prototype.render.call(this,x,y);
    this.memory.x = x;
    this.memory.y = y;
    if (this.passage !== undefined) { this.passage.setPosition(x,y); }

    if (open && SHOW_INDEXES) {
        this.context.font=DEFAULT_FONT_FAMILY;
        this.context.fillStyle = DEFAULT_FONT_COLOR;
        let label = this.index;
        if (DEBUG) {
            if (this.acceptDoor) {
                if (this.passage !== undefined) {
                    if (this.passage.isRight()) label = 'R' + label;
                    else label = 'B' + label;
                } else {
                    if (this.door !== undefined) {
                        label = 'D' + label;
                    }
                }
            }
            if (this.acceptGateway) label = label + 'I';
            if (this.acceptExit) label = label + 'E';
        }
        let diff = (label.length-1) * -5;
        this.context.fillText(
            label,
            x+31 + diff,
            y+27
        );
    }

    if (open) {
        this.borders.top.render(x,y);
        this.borders.right.render(x,y);
        this.borders.bottom.render(x,y);
        this.borders.left.render(x,y);
    }

    if (open && (this.inputGateway !== undefined) && !this.gatewayStairs) {
        this.inputGateway.render(x+6,y-70);
    }
    if ((open || next) && (this.door !== undefined)) {
        this.door.render(x,y);
    }
    if (open && (this.exitGateway !== undefined)) {
        if (this.exitStairs) {
            this.exitGateway.render(x-80,y+2);
        } else {
            this.exitGateway.render(x-29,y-51);
        }
    }
}

function Room(context,randomSize,inputGateway,exitGateway,containsTopDoor,containsLeftDoor,isHallway,isAuxiliary,currentFloor,lastFloor) {
    let indexesInputGateway = [];
    let indexesExitGateway = [];
    let indexesBottomPassage = [];
    let indexesRightPassage = [];
    let indexesLeftDoor = [];
    let indexesTopDoor = [];
    let tiles = [];

    randomSize.forEach(function(scaffold,index){
        if (scaffold.acceptGateway) { indexesInputGateway.push(index); }
        if (scaffold.acceptExit) { indexesExitGateway.push(index); }

        scaffold.gatewayStairs = false;
        scaffold.exitStairs = false;
        if (lastFloor > 0) {
            if (currentFloor == 0) {
                scaffold.exitStairs = true;
            } else if (currentFloor == lastFloor) {
                scaffold.gatewayStairs = true;
            } else {
                scaffold.gatewayStairs = true;
                scaffold.exitStairs = true;
            }
        }

        let tile = new Tile(context,scaffold);
        tiles.push(tile);

        if (!tile.borders.bottom.nullable && tile.acceptDoor) { indexesBottomPassage.push(index); }
        if (!tile.borders.right.nullable && tile.acceptDoor) { indexesRightPassage.push(index); }
        if (!tile.borders.left.nullable && tile.acceptDoor) { indexesLeftDoor.push(index); }
        if (!tile.borders.top.nullable && tile.acceptDoor) { indexesTopDoor.push(index); }
    });

    this.context = context;
    this.tiles = tiles;
    this.isHallway = isHallway;
    this.isAuxiliary = isAuxiliary;

    this.inputDefined = false;
    if (inputGateway && indexesInputGateway.length > 0) {
        let indexInputGateway = indexesInputGateway[random(indexesInputGateway.length)];
        this.tiles[indexInputGateway].setInputGateway();
        this.inputDefined = true;
    }
    let exitDefined = false;
    if (exitGateway && indexesExitGateway.length > 0) {
        let indexExitGateway = indexesExitGateway[random(indexesExitGateway.length)];
        this.tiles[indexExitGateway].setExitGateway();
        exitDefined = true;
    }

    /* Bottom Passage */
    if (!exitDefined && (indexesBottomPassage.length > 0)) {
        let length = Math.floor(indexesBottomPassage.length / 2);
        if ( (indexesBottomPassage.length % 2) == 0 ) length = length - 1;
        if (length < 0) length = 0;
        for (let i=length; i > -1; i--) {
            let tile = this.tiles[ indexesBottomPassage[i] ];
            if ((this.bottomPassage === undefined) && randomPercent(75)) {
                this.bottomPassage = tile.createPassage(LINKS.bottom);
            }
        }
        if (this.bottomPassage === undefined) {
            let tile = this.tiles[ indexesBottomPassage[length] ];
            this.bottomPassage = tile.createPassage(LINKS.bottom);
        }
    }
    /* Right Passage */
    if (indexesRightPassage.length > 0) {
        let length = Math.floor(indexesRightPassage.length / 2);
        if ((indexesRightPassage.length % 2) == 0) length = length - 1;
        for (let i=length; i > -1; i--) {
            let tile = this.tiles[ indexesRightPassage[i] ];
            if ((this.rightPassage === undefined) && (tile.inputGateway === undefined) && randomPercent(75)) {
                this.rightPassage = tile.createPassage(LINKS.right);
            }
        }
        if (this.rightPassage === undefined) {
            let tile = this.tiles[ indexesRightPassage[length] ];
            this.rightPassage = tile.createPassage(LINKS.right);
        }
    }

    /* Top Door */
    this.topDoor = { x: 0, y: 0, nullable: true, pointer: undefined };
    if (containsTopDoor && !this.inputDefined && (indexesTopDoor.length > 0)) {
        if (isAuxiliary) {
            let index = 0;
            let tile = this.tiles[ indexesTopDoor[index] ];
            tile.createDoor(DOOR_TYPE.top);
            let multiplier = indexesTopDoor[index];
            this.topDoor.x = multiplier * LINKS.right.x;
            this.topDoor.y = multiplier * LINKS.right.y;
            this.topDoor.nullable = false;
            this.topDoor.pointer = tile;
        } else {
            let start = Math.floor(indexesTopDoor.length / 2) + 1;
            if (indexesTopDoor.length >= 5) {
                if (randomBoolean()) start = indexesTopDoor.length-2;
                else start = indexesTopDoor.length-1;
            }
            if (start == indexesTopDoor.length) start = indexesTopDoor.length-1;
            for (let i=start; i < indexesTopDoor.length; i++) {
                let tile = this.tiles[ indexesTopDoor[i] ];
                if (this.topDoor.nullable && (randomPercent(75) || (i == (indexesTopDoor.length-1)))) {
                    tile.createDoor(DOOR_TYPE.top);
                    let multiplier = indexesTopDoor[i];
                    this.topDoor.x = multiplier * LINKS.right.x;
                    this.topDoor.y = multiplier * LINKS.right.y;
                    this.topDoor.nullable = false;
                    this.topDoor.pointer = tile;
                }
            }
        }
    }

    /* Left Door */
    this.leftDoor = { x: 0, y: 0, nullable: true, pointer: undefined };
    if (containsLeftDoor && indexesLeftDoor.length > 0) {
        if (isAuxiliary) {
            let index = 0;
            let tile = this.tiles[ indexesLeftDoor[index] ];
            tile.createDoor(DOOR_TYPE.left);
            let multiplier = index;
            this.leftDoor.x = multiplier * LINKS.bottom.x;
            this.leftDoor.y = multiplier * LINKS.bottom.y;
            this.leftDoor.nullable = false;
            this.leftDoor.pointer = tile;
        } else {
            let start = Math.floor(indexesLeftDoor.length / 2) + 1;
            if (start >= indexesLeftDoor.length) start--;
            for (let i=start; i < indexesLeftDoor.length; i++) {
                let tile = this.tiles[ indexesLeftDoor[i] ];
                if (this.leftDoor.nullable && (randomPercent(75) || (i == (indexesLeftDoor.length-1)))) {
                    tile.createDoor(DOOR_TYPE.left);
                    let multiplier = i;
                    this.leftDoor.x = multiplier * LINKS.bottom.x;
                    this.leftDoor.y = multiplier * LINKS.bottom.y;
                    this.leftDoor.nullable = false;
                    this.leftDoor.pointer = tile;
                }
            }
        }
    }
}

Room.prototype.doorIsOpen = function() {
    let open = this.inputDefined;
    if ( (!this.topDoor.nullable) && (this.topDoor.pointer.door.open) ) {
        open = true;
    }
    if ( (!this.leftDoor.nullable) && (this.leftDoor.pointer.door.open) ) {
        open = true;
    }
    return open;
}

Room.prototype.parentIsVisited = function() {
    if (this.parent !== undefined) {
        return this.parent.doorIsOpen();
    }
    return false;
}

Room.prototype.getPassages = function() {
    let passages = [];
    if (this.bottomPassage != undefined) {
        passages.push(this.bottomPassage);
    }
    if (this.rightPassage != undefined) {
        passages.push(this.rightPassage);
    }
    return passages;
}

Room.prototype.render = function(x,y) {
    let open = this.doorIsOpen() || SHOW_ALL_ROOMS;
    let next = this.parentIsVisited() || SHOW_ALL_ROOMS;
    let tiles = this.tiles;

    tiles.forEach(function(tile){
        let link = tile.origin.link;
        let baseAxes = { x: x, y: y };
        if (tile.origin.baseIndex > -1) { baseAxes = tiles[tile.origin.baseIndex].memory; }
        tile.render(baseAxes.x+link.x,baseAxes.y+link.y,open,next);
    });
}

/**********************************************************************************************************/
/************************************************** MAP ***************************************************/
/**********************************************************************************************************/
function Map(canvas,context,numberOfRooms,minorSize,majorSize,containsHallway,containsExit,currentFloor,lastFloor) {
    this.canvas = canvas;
    this.context = context;

    this.numberOfBottomRooms = Math.floor(numberOfRooms / 2);
    this.countBottomRooms = 0;
    this.numberOfLeftRooms = (numberOfRooms - this.numberOfBottomRooms) - 1;
    this.countLeftRooms = 0;

    this.minorSize = minorSize;
    this.majorSize = majorSize;
    this.flatAuxiliaryRoom = true;

    this.model = (numberOfRooms < 5) ? 0 : randomBetween(0,3);
    this.containsHallway = containsHallway;
    this.containsExit = containsExit;
    this.exitGatewayCount = 0;
    this.focusedRoom = undefined;

    this.currentFloor = currentFloor;
    this.lastFloor = lastFloor;

    /* Create Main Room */
    this.mainRoom = this.createRoom(false,false,true,false,false,false,false,-1);
    this.mainRoom.parent = undefined;

    if (this.model === 0) {
        let room = this.mainRoom;
        this.createLeftRooms(room);
        room = this.mainRoom;
        this.createBottomRooms(room);
    } else if (this.model === 1) {
        let room = this.mainRoom;
        room = this.createBottomRooms(room);
        if (this.focusedRoom !== undefined) {
            room = this.focusedRoom.room;
        }
        this.createLeftRooms(room);
    } else if (this.model === 2) {
        let room = this.mainRoom;
        room = this.createLeftRooms(room);
        if (this.focusedRoom !== undefined) {
            room = this.focusedRoom.room;
        }
        this.createBottomRooms(room);
    }

}

Map.prototype.exitGatewayWasDefined = function(exitGateway) {
    let result = false;
    if (exitGateway) {
        if (this.exitGatewayCount == 0) {
            result = randomBoolean();
            if (result) {
                this.exitGatewayCount = -1;
            } else {
                this.exitGatewayCount = 1;
            }
        } else if (this.exitGatewayCount === 1) {
            result = true;
            this.exitGatewayCount = -1;
        }
    }
    return result;
}

Map.prototype.createLeftRooms = function(room) {
    let percentHallway = (this.model === 2) ? 80 : 25;

    while (this.countLeftRooms < this.numberOfLeftRooms) {
        if (room.passageRight) {
            let isFirst = (this.countLeftRooms === 0);
            let isLast = (this.countLeftRooms == (this.numberOfLeftRooms-1));
            let requiredHallway = (this.model === 2) && isLast;
            let isSecondAndRequiredHallway = (this.countLeftRooms === 1) && (this.model === 1);
            let randomScaffold = { index: -1 };
            if (!isFirst && (requiredHallway || isSecondAndRequiredHallway || (this.containsHallway && randomPercent(percentHallway)))) {
                randomScaffold = this.createHallway(true,requiredHallway);
                room.next.left = randomScaffold.hallway;
                room.next.left.parent = room;
                room = room.next.left;
            }

            let exitGateway = this.containsExit && isLast && (this.model !== 2);
            room.next.left = this.createRoom(false,true,false,exitGateway,isFirst,isSecondAndRequiredHallway,isLast,randomScaffold.index);
            room.next.left.parent = room;
            room = room.next.left;
        }
        this.countLeftRooms++;
    }
    return room;
}

Map.prototype.createBottomRooms = function(room) {
    let percentHallway = (this.model === 1) ? 80 : 25;

    while (this.countBottomRooms < this.numberOfBottomRooms) {
        if (room.passageBottom) {
            let isFirst = (this.countBottomRooms === 0);
            let isLast = (this.countBottomRooms == (this.numberOfBottomRooms-1));
            let requiredHallway = (this.model === 1) && isLast;
            let isSecondAndRequiredHallway = (this.countBottomRooms === 1) && (this.model === 2);
            let randomScaffold = { index: -1 };
            if (!isFirst && (requiredHallway || isSecondAndRequiredHallway || (this.containsHallway && randomPercent(percentHallway)))) {
                randomScaffold = this.createHallway(false,requiredHallway);
                room.next.bottom = randomScaffold.hallway;
                room.next.bottom.parent = room;
                room = room.next.bottom;
            }

            let exitGateway = this.containsExit && isLast && (this.model !== 1);
            room.next.bottom = this.createRoom(true,false,false,exitGateway,isFirst,isSecondAndRequiredHallway,isLast,randomScaffold.index);
            room.next.bottom.parent = room;
            room = room.next.bottom;
        }
        this.countBottomRooms++;
    }
    return room;
}

Map.prototype.createHallway = function(left,requiredHallway) {
    let random = left ? getRandomLeftHallway(requiredHallway) : getRandomBottomHallway(requiredHallway);
    let hallway = new Room(
        this.context,
        random.scaffold,
        false, /* Contains Input Gateway */
        false, /* Contains Exit Gateway */
        !left, /* Contains Top Door */
        left, /* Contains Left Door */
        true, /* Hallway */
        false, /* Auxiliary Room */
        this.currentFloor, /* Current Floor */
        this.lastFloor /* Last Floor */
    );
    hallway.next = { bottom: undefined, left: undefined };

    return {
        index: random.index,
        hallway: hallway
    };
}

Map.prototype.createRoom = function(containsTopDoor,constainsLeftDoor,inputGateway,exitGateway,isFirst,isSecond,isLast,indexHallway) {

    exitGateway = this.exitGatewayWasDefined(exitGateway);

    let random = getRandomRoom( inputGateway ? 'medium' : this.minorSize, this.majorSize );

    if (isFirst && (this.focusedRoom !== undefined)) {
        let indexFocusedRoom = this.focusedRoom.fork[randomBetween(0,this.focusedRoom.fork.length)];
        random.index = indexFocusedRoom;
        random.scaffold = ROOMS[indexFocusedRoom];
    }

    if (isSecond && (this.focusedRoom !== undefined)) {
        let indexSecondRoom = this.focusedRoom.secondRange[randomBetween(0,this.focusedRoom.secondRange.length)];
        random.index = indexSecondRoom;
        random.scaffold = ROOMS[indexSecondRoom];
    }

    let room = new Room(
        this.context,
        random.scaffold,
        inputGateway, /* Contains Input Gateway */
        exitGateway, /* Contains Exit Gateway */
        containsTopDoor, /* Contains Top Door */
        constainsLeftDoor, /* Contains Left Door */
        false, /* Hallway */
        false, /* Auxiliary Room */
        this.currentFloor, /* Current Floor */
        this.lastFloor /* Last Floor */
    );

    let passageBottom = false;
    let passageRight = false;
    let passages = room.getPassages();
    passages.forEach(function(passage){
        if (passage.isBottom()) passageBottom = true;
        if (passage.isRight()) passageRight = true;
    });
    room.passageBottom = passageBottom;
    room.passageRight = passageRight;
    room.next = { bottom: undefined, left: undefined };

    let fork = [];
    if (randomBoolean() && (this.focusedRoom === undefined)) {
        fork = forkRange(indexHallway);

        if (fork.length > 0) {
            this.focusedRoom = {
                fork: fork,
                secondRange: [ 9, 10, 11, 12, 13, 14, 15, 16 ],
                room: room
            };
        }
    }

    if ( !(isLast && (this.model === 2)) && !(fork.length > 0) && !(isFirst && (this.focusedRoom !== undefined)) ) {
        if (((this.countLeftRooms > 0) || this.flatAuxiliaryRoom) && passageBottom && (random.acceptBottomRoom > -1) && constainsLeftDoor && randomPercent(70)) {
            let auxiliaryRoom = new Room(
                this.context,
                ROOMS[random.acceptBottomRoom],
                false, /* Contains Input Gateway */
                false, /* Contains Exit Gateway */
                true, /* Contains Top Door */
                false, /* Contains Left Door */
                false, /* Hallway */
                true, /* Auxiliary Room */
                this.currentFloor, /* Current Floor */
                this.lastFloor /* Last Floor */
            );
            auxiliaryRoom.passageBottom = false;
            auxiliaryRoom.passageRight = false;
            auxiliaryRoom.next = { bottom: undefined, left: undefined };
            room.next.bottom = auxiliaryRoom;
            if (this.countLeftRooms == 0) this.flatAuxiliaryRoom = false;
            auxiliaryRoom.parent = room;
        }
    }

    if ( !(isLast && (this.model === 1)) && !(fork.length > 0) && !(isFirst && (this.focusedRoom !== undefined)) ) {
        if (((this.countBottomRooms > 0) || this.flatAuxiliaryRoom) && passageRight && (random.acceptLeftRoom > -1) && containsTopDoor && randomPercent(70)) {
            let auxiliaryRoom = new Room(
                this.context,
                ROOMS[random.acceptLeftRoom],
                false, /* Contains Input Gateway */
                false, /* Contains Exit Gateway */
                false, /* Contains Top Door */
                true, /* Contains Left Door */
                false, /* Hallway */
                true, /* Auxiliary Room */
                this.currentFloor, /* Current Floor */
                this.lastFloor /* Last Floor */
            );
            auxiliaryRoom.passageBottom = false;
            auxiliaryRoom.passageRight = false;
            auxiliaryRoom.next = { bottom: undefined, left: undefined };
            room.next.left = auxiliaryRoom;
            if (this.countBottomRooms == 0) this.flatAuxiliaryRoom = false;
            auxiliaryRoom.parent = room;
        }
    }

    return room;
}

Map.prototype.background = function() {
    let background = document.getElementById('background');
    let pattern = this.context.createPattern(background, 'repeat');
    this.context.fillStyle = pattern;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

Map.prototype.renderRoom = function(room,x,y) {
    room.render(x,y);

    let passages = room.getPassages();
    if (room.next.bottom !== undefined) {
        if (passages[0] !== undefined) {
            let printX = passages[0].x - room.next.bottom.topDoor.x;
            let printY = passages[0].y - room.next.bottom.topDoor.y;
            this.renderRoom(room.next.bottom,printX,printY);
        }
    }

    if (room.next.left !== undefined) {
        if (passages[1] !== undefined) {
            let printX = passages[1].x - room.next.left.leftDoor.x;
            let printY = passages[1].y - room.next.left.leftDoor.y;
            this.renderRoom(room.next.left,printX,printY);
        }
    }
}

Map.prototype.render = function(dragging_x,dragging_y) {
    this.background();

    /* Calc center of viewport */
    let center = {
        x: Math.round( this.canvas.width / 3 ),
        y: Math.round( this.canvas.height / 4 ),
    };

    /* Map size change */
    center.x = center.x - Math.round( TILE_WIDTH / 2 );
    center.y = center.y - Math.round( TILE_HEIGHT / 2 );

    let printX = center.x - dragging_x;
    let printY = center.y - dragging_y;

    this.renderRoom(this.mainRoom,printX,printY);
}

/* Global Instances */
let map = undefined;
let mouse = new Mouse();

/* Functions */
function random(maxExclusive) {
    return Math.floor(Math.random() * maxExclusive);
}

function randomBoolean() {
    let number = Math.floor(Math.random() * 2);
    return number === 0;
}

function randomPercent(p) {
    let number = Math.floor(Math.random() * 100);
    return number < p;
}

function randomBetween(minInclusive, maxExclusive) {
    return Math.floor(Math.random() * (maxExclusive - minInclusive) ) + minInclusive;
}

function getRandomBottomHallway(requiredHallway) {
    let indexScaffold = requiredHallway ? 3 : randomBetween(0, 4);
    return {
        index: indexScaffold,
        scaffold: ROOMS[indexScaffold],
        acceptBottomRoom: -1,
        acceptLeftRoom: -1
    };
}
function getRandomLeftHallway(requiredHallway) {
    let indexScaffold = requiredHallway ? 7 : randomBetween(4, 8);
    return {
        index: indexScaffold,
        scaffold: ROOMS[indexScaffold],
        acceptBottomRoom: -1,
        acceptLeftRoom: -1
    };
}

function forkRange(indexHallway) {
    if ( (indexHallway >= 0) && (indexHallway <= 3) ) {
        return [ 9, 12 ];
    }
    if ( (indexHallway >= 4) && (indexHallway <= 7) ) {
        return [ 10, 15 ];
    }
    return [];
}

function getRandomRoom(minorInclusive,majorInclusive) {
    let sizes = { tiny: 8, small: 9, medium: 12, big: 17, veryBig: 21 };
    let majorExclusive = sizes['small'];
    if (majorInclusive === 'small') { majorExclusive = sizes['medium']; }
    if (majorInclusive === 'medium') { majorExclusive = sizes['big']; }
    if (majorInclusive === 'big') { majorExclusive = sizes['veryBig']; }
    if (majorInclusive === 'veryBig') { majorExclusive = 22; }
    let indexScaffold = randomBetween(sizes[minorInclusive],majorExclusive);
    let random = {
        index: indexScaffold,
        scaffold: ROOMS[indexScaffold],
        acceptBottomRoom: acceptAuxiliaryRoom(indexScaffold),
        acceptLeftRoom: acceptAuxiliaryRoom(indexScaffold)
    };
    return random;
}

function acceptAuxiliaryRoom(index) {
    if (index >= 17) return 9;
    if (index >= 13) return 8;
    return -1;
}

function makeBorders(top,right,bottom,left) {
    return { top: top, right: right, bottom: bottom, left: left };
}

function createTileBorders(context,scaffold) {
    let corner = { render: function(x,y){}, nullable: true }
    let borders = { top: corner, right: corner, bottom: corner, left: corner };
    if (scaffold.borders.top) {
        borders.top = new Image(context,'tile-corner-top',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    }
    if (scaffold.borders.right) {
        borders.right = new Image(context,'tile-corner-right',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    }
    if (scaffold.borders.bottom) {
        borders.bottom = new Image(context,'tile-corner-bottom',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    }
    if (scaffold.borders.left) {
        borders.left = new Image(context,'tile-corner-left',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    }
    return borders;
}

function checkDoorClick(x,y) {
    let clicked = false;
    let count = 0;
    while (!clicked && (count < DOORS.length)) {
        let door = DOORS[count];
        if (door.click(x,y)) {
            let diff = mouse.diff();
            resizeCanvas(diff.x,diff.y);
            clicked = true;
        }
        count++;
    }
}

function setDungeonName() {

    let floor = '';
    if (NUMBER_OF_LAST_FLOOR > 0) {
        switch (NUMBER_OF_FLOOR) {
            case 0: floor = ' (ground floor)'; break;
            case 1: floor = ' (first floor)'; break;
            case 2: floor = ' (second floor)'; break;
            case 3: floor = ' (third floor)'; break;
            case 4: floor = ' (fourth floor)'; break;
            case 5: floor = ' (fifth floor)'; break;
            case 6: floor = ' (sixth floor)'; break;
            case 7: floor = ' (seventh floor)'; break;
            case 8: floor = ' (eighth floor)'; break;
            case 9: floor = ' (ninth floor)'; break;
            case 10: floor = ' (tenth floor)'; break;
        }
    }

    let h1 = document.getElementById('dungeon-name');
    h1.textContent = 'Dungeon Name' + floor;
}

function resizeCanvas(dragging_x,dragging_y) {
    let canvas=document.getElementById('dungeon');
    let context=canvas.getContext('2d');
    canvas.width = window.innerWidth - CANVAS_BORDER;
    canvas.height = window.innerHeight - CANVAS_BORDER;

    if (map === undefined) {
        map = new Map(canvas,context,3,'tiny','veryBig',true,true,NUMBER_OF_FLOOR,NUMBER_OF_LAST_FLOOR);
    }
    map.render(dragging_x,dragging_y);
}

/* JS Events */
window.onload = function() {
    setDungeonName();
    resizeCanvas(0,0);
};

window.addEventListener('resize', function(){
    resizeCanvas(0,0);
}, false);

let divOptions = document.querySelector('div.options');
divOptions.addEventListener('click',function(event){
    event.stopPropagation();
});

let inputShowIndexes = document.getElementById('show-indexes');
inputShowIndexes.addEventListener('click',function(event){
    SHOW_INDEXES = inputShowIndexes.checked;
    let diff = mouse.diff();
    resizeCanvas(diff.x,diff.y);
});

let dungeon = document.getElementById('dungeon');
dungeon.addEventListener('mousedown', function(event){
    mouse.mousedown(event.clientX,event.clientY);
    event.stopPropagation();
}, false);
dungeon.addEventListener('mousemove', function(event){
    mouse.mousemove(event.clientX,event.clientY,resizeCanvas);
    event.stopPropagation();
}, false);
dungeon.addEventListener('mouseup', function(event){
    mouse.mouseup();
    event.stopPropagation();
}, false);

dungeon.addEventListener('touchstart', function(event){
    let touch = event.touches[0];
    mouse.mousedown(touch.pageX,touch.pageY);
    event.stopPropagation();
}, false);
dungeon.addEventListener('touchmove', function(event){
    let touch = event.touches[0];
    mouse.mousemove(touch.pageX,touch.pageY,resizeCanvas);
    event.stopPropagation();
}, false);
dungeon.addEventListener('touchend', function(event){
    mouse.mouseup();
    event.stopPropagation();
}, false);

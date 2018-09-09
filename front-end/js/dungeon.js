/* Consts */
const DEBUG = false;

const CANVAS_BORDER = 4;

const TILE_WIDTH = 71;
const TILE_HEIGHT = 53;

const GATEWAY_WIDTH = 95;
const GATEWAY_HEIGHT = 95;

const DOOR_WIDTH = 95;
const DOOR_HEIGHT = 95;

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
    /*** hallway ***/
    ROOM_SIZE.hallway.s1x3, ROOM_SIZE.hallway.s1x4, ROOM_SIZE.hallway.s1x5, ROOM_SIZE.hallway.s1x6,
    ROOM_SIZE.hallway.s3x1, ROOM_SIZE.hallway.s4x1, ROOM_SIZE.hallway.s5x1, ROOM_SIZE.hallway.s6x1,
    /*** tiny ***/
    ROOM_SIZE.tiny.s2x2,
    /*** small ***/
    ROOM_SIZE.small.s3x2, ROOM_SIZE.small.s2x3, ROOM_SIZE.small.s3x3,
    /*** medium ***/
    ROOM_SIZE.medium.s4x2, ROOM_SIZE.medium.s4x3, ROOM_SIZE.medium.s4x4, ROOM_SIZE.medium.s2x4, ROOM_SIZE.medium.s3x4,
    /*** big ***/
    ROOM_SIZE.big.s5x3, ROOM_SIZE.big.s5x4, ROOM_SIZE.big.s4x5, ROOM_SIZE.big.s5x5,
    /*** veryBig ***/
    ROOM_SIZE.veryBig.s7x7 // index=21
];

const DOOR_TYPE = {
    top: { x: 6, y: -70 },
    left: { x: -28, y: -70 },
};

/* User Interface */
let SHOW_INDEXES = DEBUG;

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

Mouse.prototype.mouseup = function(x,y) {
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

function Image(context,id,width,height,percent=1) {
    this.context = context;
    this.file=document.getElementById(id);
    this.width = width * percent;
    this.height = height * percent;
}

Image.prototype.render = function(x,y) {
    this.context.drawImage(
        this.file,
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
    this.open = open;
    this.images = [];

    if (this.type === DOOR_TYPE.top) {
        if (!this.open) {
            this.images.push(new Image(this.context,'door-closed-top',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        } else {
            this.images.push(new Image(this.context,'door-open-top-border',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
            this.images.push(new Image(this.context,'door-open-top-transparent',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        }
    } else if (this.type === DOOR_TYPE.left) {
        if (!this.open) {
            this.images.push(new Image(this.context,'door-closed-left',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        } else {
            this.images.push(new Image(this.context,'door-open-left-border',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
            this.images.push(new Image(this.context,'door-open-left-transparent',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        }
    }
}

Door.prototype.render = function(x,y) {
    let type = this.type;
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
    this.borders = createTileBorders(context,scaffold);
    this.passage = undefined;
}

Tile.prototype.setInputGateway = function() {
    this.inputGateway = new Image(
        this.context,
        'gateway',
        GATEWAY_WIDTH,
        GATEWAY_HEIGHT,
        DEFAULT_PERCENT
    );
}

Tile.prototype.setExitGateway = function() {
    this.exitGateway = new Image(
        this.context,
        'gateway',
        GATEWAY_WIDTH,
        GATEWAY_HEIGHT,
        DEFAULT_PERCENT
    );
}

Tile.prototype.createDoor = function(type) {
    this.door = new Door(this.context,type,false);
}

Tile.prototype.createPassage = function(link) {
    this.passage = new Passage(link);
    return this.passage;
}

Tile.prototype.render = function(x,y) {
    Image.prototype.render.call(this,x,y);
    this.memory.x = x;
    this.memory.y = y;
    if (this.passage !== undefined) { this.passage.setPosition(x,y); }

    if (SHOW_INDEXES) {
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

    this.borders.top.render(x,y);
    this.borders.right.render(x,y);
    this.borders.bottom.render(x,y);
    this.borders.left.render(x,y);

    if (this.inputGateway !== undefined) {
        this.inputGateway.render(x+6,y-70);
    }
    if (this.door !== undefined) {
        this.door.render(x,y);
    }
    if (this.exitGateway !== undefined) {
        this.exitGateway.render(x-29,y-51);
    }
}

function Room(context,randomSize,display,inputGateway,exitGateway,containsTopDoor,containsLeftDoor,isHallway,isAuxiliary) {
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

        let tile = new Tile(context,scaffold);
        tiles.push(tile);

        if (!tile.borders.bottom.nullable && tile.acceptDoor) { indexesBottomPassage.push(index); }
        if (!tile.borders.right.nullable && tile.acceptDoor) { indexesRightPassage.push(index); }
        if (!tile.borders.left.nullable && tile.acceptDoor) { indexesLeftDoor.push(index); }
        if (!tile.borders.top.nullable && tile.acceptDoor) { indexesTopDoor.push(index); }
    });

    this.context = context;
    this.tiles = tiles;
    this.display = display;
    this.isHallway = isHallway;

    let inputDefined = false;
    if (inputGateway && indexesInputGateway.length > 0) {
        let indexInputGateway = indexesInputGateway[random(indexesInputGateway.length)];
        this.tiles[indexInputGateway].setInputGateway();
        inputDefined = true;
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
    this.topDoor = { x: 0, y: 0, nullable: true };
    if (containsTopDoor && !inputDefined && (indexesTopDoor.length > 0)) {
        if (isAuxiliary) {
            let index = 0;
            let tile = this.tiles[ indexesTopDoor[index] ];
            tile.createDoor(DOOR_TYPE.top);
            let multiplier = indexesTopDoor[index];
            this.topDoor.x = multiplier * LINKS.right.x;
            this.topDoor.y = multiplier * LINKS.right.y;
            this.topDoor.nullable = false;
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
                }
            }
        }
    }

    /* Left Door */
    this.leftDoor = { x: 0, y: 0, nullable: true };
    if (containsLeftDoor && indexesLeftDoor.length > 0) {
        if (isAuxiliary) {
            let index = 0;
            let tile = this.tiles[ indexesLeftDoor[index] ];
            tile.createDoor(DOOR_TYPE.left);
            let multiplier = index;
            this.leftDoor.x = multiplier * LINKS.bottom.x;
            this.leftDoor.y = multiplier * LINKS.bottom.y;
            this.leftDoor.nullable = false;
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
                }
            }
        }
    }
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
    if (!this.display) return;
    let tiles = this.tiles;
    tiles.forEach(function(tile){
        let link = tile.origin.link;
        let baseAxes = { x: x, y: y };
        if (tile.origin.baseIndex > -1) { baseAxes = tiles[tile.origin.baseIndex].memory; }
        tile.render(baseAxes.x+link.x,baseAxes.y+link.y);
    });
}

/**********************************************************************************************************/
/************************************************** MAP ***************************************************/
/**********************************************************************************************************/
function Map(canvas,context,numberOfRooms,minorSize,majorSize,containsHallway,containsExit) {
    this.canvas = canvas;
    this.context = context;

    this.numberOfBottomRooms = Math.floor(numberOfRooms / 2);
    this.countBottomRooms = 0;
    this.numberOfLeftRooms = (numberOfRooms - this.numberOfBottomRooms) - 1;
    this.countLeftRooms = 0;

    this.minorSize = minorSize;
    this.majorSize = majorSize;
    this.flatAuxiliaryRoom = true;

    /* Create Main Room */
    this.mainRoom = this.createRoom(false,false,true,false);

    let room = this.mainRoom;
    while (this.countLeftRooms < this.numberOfLeftRooms) {
        if (room.passageRight) {
            if (containsHallway && randomPercent(25)) {
                room.next.left = this.createHallway(true);
                room = room.next.left;
            }

            let exitGateway = randomPercent(70) && containsExit && (this.countLeftRooms == (this.numberOfLeftRooms-1));
            room.next.left = this.createRoom(false,true,false,exitGateway);
            room = room.next.left;
        }
        this.countLeftRooms++;
    }

    room = this.mainRoom;
    while (this.countBottomRooms < this.numberOfBottomRooms) {
        if (room.passageBottom) {
            if (containsHallway && randomPercent(25)) {
                room.next.bottom = this.createHallway(false);
                room = room.next.bottom;
            }

            let exitGateway = randomPercent(70) && containsExit && (this.countBottomRooms == (this.numberOfBottomRooms-1));
            room.next.bottom = this.createRoom(true,false,false,exitGateway);
            room = room.next.bottom;
        }
        this.countBottomRooms++;
    }
}

Map.prototype.createHallway = function(left) {
    let random = left ? getRandomLeftHallway() : getRandomBottomHallway();
    let hallway = new Room(
        this.context,
        random.scaffold,
        true, /* Display */
        false, /* Contains Input Gateway */
        false, /* Contains Exit Gateway */
        !left, /* Contains Top Door */
        left, /* Contains Left Door */
        true, /* Hallway */
        false /* Auxiliary Room */
    );
    hallway.next = { bottom: undefined, left: undefined };

    return hallway;
}

Map.prototype.createRoom = function(containsTopDoor,constainsLeftDoor,inputGateway,exitGateway) {

    let random = getRandomRoom( inputGateway ? 'small' : this.minorSize, this.majorSize );
    let room = new Room(
        this.context,
        random.scaffold,
        true, /* Display */
        inputGateway, /* Contains Input Gateway */
        exitGateway, /* Contains Exit Gateway */
        containsTopDoor, /* Contains Top Door */
        constainsLeftDoor, /* Contains Left Door */
        false, /* Hallway */
        false /* Auxiliary Room */
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

    if (((this.countLeftRooms > 0) || this.flatAuxiliaryRoom) && passageBottom && (random.acceptBottomRoom > -1) && constainsLeftDoor && randomPercent(70)) {
        let auxiliaryRoom = new Room(
            this.context,
            ROOMS[random.acceptBottomRoom],
            true, /* Display */
            false, /* Contains Input Gateway */
            false, /* Contains Exit Gateway */
            true, /* Contains Top Door */
            false, /* Contains Left Door */
            false, /* Hallway */
            true /* Auxiliary Room */
        );
        auxiliaryRoom.passageBottom = false;
        auxiliaryRoom.passageRight = false;
        auxiliaryRoom.next = { bottom: undefined, left: undefined };
        room.next.bottom = auxiliaryRoom;
        if (this.countLeftRooms == 0) this.flatAuxiliaryRoom = false;
    }
    if (((this.countBottomRooms > 0) || this.flatAuxiliaryRoom) && passageRight && (random.acceptLeftRoom > -1) && containsTopDoor && randomPercent(70)) {
        let auxiliaryRoom = new Room(
            this.context,
            ROOMS[random.acceptLeftRoom],
            true, /* Display */
            false, /* Contains Input Gateway */
            false, /* Contains Exit Gateway */
            false, /* Contains Top Door */
            true, /* Contains Left Door */
            false, /* Hallway */
            true /* Auxiliary Room */
        );
        auxiliaryRoom.passageBottom = false;
        auxiliaryRoom.passageRight = false;
        auxiliaryRoom.next = { bottom: undefined, left: undefined };
        room.next.left = auxiliaryRoom;
        if (this.countBottomRooms == 0) this.flatAuxiliaryRoom = false;
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
        x: Math.round( this.canvas.width / 2 ),
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

function getRandomBottomHallway() {
    return {
        scaffold: ROOMS[randomBetween(0, 4)],
        acceptBottomRoom: -1,
        acceptLeftRoom: -1
    };
}
function getRandomLeftHallway() {
    return {
        scaffold: ROOMS[randomBetween(4, 8)],
        acceptBottomRoom: -1,
        acceptLeftRoom: -1
    };
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
        scaffold: ROOMS[indexScaffold],
        acceptBottomRoom: acceptAuxiliaryRoom(indexScaffold),
        acceptLeftRoom: acceptAuxiliaryRoom(indexScaffold)
    };
    return random;
}

function acceptAuxiliaryRoom(index) {
    if (index >= 17) return 9;
    if (index >= 12) return 8;
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

function setDungeonName() {
    let h1 = document.getElementById('dungeon-name');
    h1.textContent = 'Dungeon Name';
}

function resizeCanvas(dragging_x,dragging_y) {
    let canvas=document.getElementById('dungeon');
    let context=canvas.getContext('2d');
    canvas.width = window.innerWidth - CANVAS_BORDER;
    canvas.height = window.innerHeight - CANVAS_BORDER;

    if (map === undefined) {
        map = new Map(canvas,context,10,'tiny','veryBig',true,true);
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

dungeon.addEventListener("touchstart", function(event){
    let touch = event.touches[0];
    mouse.mousedown(touch.pageX,touch.pageY);
    event.stopPropagation();
}, false);
dungeon.addEventListener("touchmove", function(event){
    let touch = event.touches[0];
    mouse.mousemove(touch.pageX,touch.pageY,resizeCanvas);
    event.stopPropagation();
}, false);
dungeon.addEventListener("touchend", function(event){
    mouse.mouseup();
    event.stopPropagation();
}, false);

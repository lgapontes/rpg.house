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

/* User Interface */
let SHOW_INDEXES = DEBUG;
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

function Door(context,bottom,open) {
    this.context = context;
    this.bottom = bottom;
    this.open = open;
    this.images = [];

    if (this.bottom) {
        if (!this.open) {
            this.images.push(new Image(this.context,'door-closed-top',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        } else {
            this.images.push(new Image(this.context,'door-open-top-border',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
            this.images.push(new Image(this.context,'door-open-top-transparent',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        }
    }
}

Door.prototype.render = function(x,y) {
    if (!this.bottom) return;

    let xa = x-29;
    let ya = y-51;
    this.images.forEach(function(image){
        image.render(xa,ya);
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

Tile.prototype.setDoor = function(bottom) {
    this.door = new Door(this.context,bottom,false);
}

Tile.prototype.render = function(x,y) {
    Image.prototype.render.call(this,x,y);
    this.memory.x = x;
    this.memory.y = y;

    if (SHOW_INDEXES) {
        this.context.font=DEFAULT_FONT_FAMILY;
        this.context.fillStyle = DEFAULT_FONT_COLOR;
        let label = this.index;
        if (DEBUG && this.acceptDoor) label = 'D' + label;
        if (DEBUG && this.acceptGateway) label = label + 'I';
        if (DEBUG && this.acceptExit) label = label + 'E';
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
    if (this.exitGateway !== undefined) {
        this.exitGateway.render(x-29,y-51);
    }
    if (this.door !== undefined) {
        this.door.render(x,y);
    }
}

function Room(context,randomSize,display,inputGateway,exitGateway) {
    let indexesInputGateway = [];
    let indexesExitGateway = [];
    let indexesRightDoor = [];
    let tiles = [];

    randomSize.forEach(function(scaffold,index){
        if (scaffold.acceptGateway) { indexesInputGateway.push(index); }
        if (scaffold.acceptExit) { indexesExitGateway.push(index); }

        let tile = new Tile(context,scaffold);
        tiles.push(tile);

        if (!tile.borders.right.nullable) { indexesRightDoor.push(index); }
    });

    this.context = context;
    this.tiles = tiles;
    this.display = display;

    if (inputGateway && indexesInputGateway.length > 0) {
        let indexInputGateway = indexesInputGateway[random(indexesInputGateway.length)];
        this.tiles[indexInputGateway].setInputGateway();
    }
    if (exitGateway && indexesExitGateway.length > 0) {
        let indexExitGateway = indexesExitGateway[random(indexesExitGateway.length)];
        this.tiles[indexExitGateway].setExitGateway();
    }

    let indexBottomDoor = -1;
    let indexRightDoor = -1;
    this.tiles.forEach(function(tile,index){
        /* Bottom Door */
        if (!exitGateway && (indexesExitGateway.length > 0) && tile.acceptDoor && tile.acceptExit && (this.bottomDoor === undefined)) {
            indexBottomDoor++;
            if (indexBottomDoor <= Math.floor(indexesExitGateway.length / 2)) {
                if (randomBoolean()) {
                    tile.setDoor(true);
                    this.bottomDoor = tile;
                    DOORS.push(tile.door);
                }
            }
        }

        /* Right Door */
        if (tile.acceptDoor && (indexesRightDoor.length > 0) && (!tile.borders.right.nullable) && (this.rightDoor === undefined) && (tile.inputGateway === undefined)) {
            indexRightDoor++;
            if (indexRightDoor <= Math.floor(indexesRightDoor.length / 2)) {
                if (randomBoolean()) {
                    tile.setDoor(false);
                    this.rightDoor = tile;
                    DOORS.push(tile.door);
                }
            }
        }
    });
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

function Map(canvas,context) {
    this.canvas = canvas;
    this.context = context;

    /**********************************************************************************************************/
    /************************************************* RANDOM *************************************************/
    /**********************************************************************************************************/
    let scaffold = getRandomRoom('tiny','veryBig');
    //let scaffold = getRandomHallway();
    this.room = new Room(context,scaffold,true,true,false);

}

Map.prototype.background = function() {
    let background = document.getElementById('background');
    let pattern = this.context.createPattern(background, 'repeat');
    this.context.fillStyle = pattern;
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
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

    this.room.render(
        center.x - dragging_x,
        center.y - dragging_y
    );
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

function randomBetween(minInclusive, maxExclusive) {
    return Math.floor(Math.random() * (maxExclusive - minInclusive) ) + minInclusive;
}

function getRandomHallway() {
    return ROOMS[randomBetween(0, 8)];
}
function getRandomRoom(minorInclusive,majorInclusive) {
    let sizes = { tiny: 8, small: 9, medium: 12, big: 17, veryBig: 21 };
    let majorExclusive = sizes['small'];
    if (majorInclusive === 'small') { majorExclusive = sizes['medium']; }
    if (majorInclusive === 'medium') { majorExclusive = sizes['big']; }
    if (majorInclusive === 'big') { majorExclusive = sizes['veryBig']; }
    if (majorInclusive === 'veryBig') { majorExclusive = 22; }
    return ROOMS[randomBetween(sizes[minorInclusive],majorExclusive)];
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
        map = new Map(canvas,context);
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

/* Consts */
const CANVAS_BORDER = 4;

const TILE_WIDTH = 71;
const TILE_HEIGHT = 53;

const INPUT_GATEWAY_WIDTH = 71;
const INPUT_GATEWAY_HEIGHT = 65;

const DEFAULT_PERCENT = 1;
const DEFAULT_FONT_FAMILY = 'bold 20px monospace';
const DEFAULT_FONT_COLOR = '#523e07';

const LINKS = {
    none: { x: 0, y: 0 },
    right: { x: 36, y:21 },
    bottom: { x: -36, y:21 }
};

const ROOM_SIZE = {
    /*** TINY ***/
    tiny: [
        { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true },
        { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true },
        { index: '3', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false },
        { index: '4', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false }
    ],

    /*** SMALL_3x2 ***/
    small_3x2: [
        { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true },
        { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true },
        { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true },
        { index: '4', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false },
        { index: '5', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false },
        { index: '6', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false }
    ],

    /*** SMALL_2x3 ***/
    small_2x3: [
        { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true },
        { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true },
        { index: '3', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false },
        { index: '4', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false },
        { index: '5', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false },
        { index: '6', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false }
    ],

    /*** SMALL_3x3 ***/
    small_3x3: [
        { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true },
        { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true },
        { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true },
        { index: '4', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false },
        { index: '5', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false },
        { index: '6', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false },
        { index: '7', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false },
        { index: '8', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false },
        { index: '9', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false }
    ],

    /*** MEDIUM_4x2 ***/
    medium_4x2: [
        { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true },
        { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true },
        { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true },
        { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true },
        { index: '5', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false },
        { index: '6', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false },
        { index: '7', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false },
        { index: '8', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false }
    ],

    /*** MEDIUM_4x3 ***/
    medium_4x3: [
        { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true },
        { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true },
        { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true },
        { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true },
        { index: '5', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false },
        { index: '6', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false },
        { index: '7', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false },
        { index: '8', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false },
        { index: '9', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false },
        { index: '10', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false },
        { index: '11', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false },
        { index: '12', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false }
    ],

    /*** MEDIUM_4x4 ***/
    medium_4x4: [
        { index: '1', origin: { baseIndex: -1, link: LINKS.none }, acceptGateway: true },
        { index: '2', origin: { baseIndex: 0, link: LINKS.right }, acceptGateway: true },
        { index: '3', origin: { baseIndex: 1, link: LINKS.right }, acceptGateway: true },
        { index: '4', origin: { baseIndex: 2, link: LINKS.right }, acceptGateway: true },
        { index: '5', origin: { baseIndex: 0, link: LINKS.bottom }, acceptGateway: false },
        { index: '6', origin: { baseIndex: 1, link: LINKS.bottom }, acceptGateway: false },
        { index: '7', origin: { baseIndex: 2, link: LINKS.bottom }, acceptGateway: false },
        { index: '8', origin: { baseIndex: 3, link: LINKS.bottom }, acceptGateway: false },
        { index: '9', origin: { baseIndex: 4, link: LINKS.bottom }, acceptGateway: false },
        { index: '10', origin: { baseIndex: 5, link: LINKS.bottom }, acceptGateway: false },
        { index: '11', origin: { baseIndex: 6, link: LINKS.bottom }, acceptGateway: false },
        { index: '12', origin: { baseIndex: 7, link: LINKS.bottom }, acceptGateway: false },
        { index: '13', origin: { baseIndex: 8, link: LINKS.bottom }, acceptGateway: false },
        { index: '14', origin: { baseIndex: 9, link: LINKS.bottom }, acceptGateway: false },
        { index: '15', origin: { baseIndex: 10, link: LINKS.bottom }, acceptGateway: false },
        { index: '16', origin: { baseIndex: 11, link: LINKS.bottom }, acceptGateway: false }
    ],
};

let SHOW_INDEXES = true;

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
    if (this.dragging) {
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

function Tile(context,scaffold) {
    Image.call(this, context,'tile',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    this.index = scaffold.index;
    this.origin = scaffold.origin;
    this.memory = { x:0, y:0 };
    this.inputGateway = undefined;
}

Tile.prototype.setInputGateway = function() {
    this.inputGateway = new Image(
        this.context,
        'input-gateway',
        INPUT_GATEWAY_WIDTH,
        INPUT_GATEWAY_HEIGHT,
        DEFAULT_PERCENT
    );
}

Tile.prototype.render = function(x,y) {
    Image.prototype.render.call(this,x,y);
    this.memory.x = x;
    this.memory.y = y;

    if (SHOW_INDEXES) {
        this.context.font=DEFAULT_FONT_FAMILY;
        this.context.fillStyle = DEFAULT_FONT_COLOR;
        let diff = (this.index.length > 1) ? -6 : 0;
        this.context.fillText(
            this.index,
            x+29 + diff,
            y+28
        );
    }

    if (this.inputGateway !== undefined) {
        //this.inputGateway.render(x+36,y-46);
        this.inputGateway.render(x+42,y-50);
    }
}

function Room(context) {
    this.context = context;
    let tiles = [];
    let indexesGateway = [];
    let size = ROOM_SIZE.medium_4x4;
    size.forEach(function(scaffold,index){
        if (scaffold.acceptGateway) { indexesGateway.push(index); }
        let tile = new Tile(context,scaffold);
        tiles.push(tile);
    });
    this.tiles = tiles;

    let indexGateway = random(indexesGateway.length);
    this.tiles[indexGateway].setInputGateway();
}

Room.prototype.render = function(x,y) {
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
    this.room = new Room(context);
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
        y: Math.round( this.canvas.height / 2 ),
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

function setDungeonName() {
    let h1 = document.getElementById('dungeon-name');
    h1.textContent = 'Dungeon Name';
}

function resizeCanvas(dragging_x=0,dragging_y=0) {
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
    resizeCanvas();
};

window.addEventListener('resize', resizeCanvas, false);

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

/* Consts */
const CANVAS_BORDER = 4;
const TILE_WIDTH = 71;
const TILE_HEIGHT = 53;
const DEFAULT_PERCENT = 1;

/* Model */
function Mouse() {
    this.dragging = false;
    this.memory = undefined;
    this.start_x = 0;
    this.start_y = 0;
    this.x = 0;
    this.y = 0;
}

Mouse.prototype.mousedown = function(event) {
    this.dragging = true;
    this.start_x = event.clientX;
    this.start_y = event.clientY;
}

Mouse.prototype.mousemove = function(event,callback) {
    if (this.dragging) {
        this.x = event.clientX;
        this.y = event.clientY;

        let diff = this.diff();
        callback(diff.x,diff.y);
    }
}

Mouse.prototype.mouseup = function(event) {
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

function Map(canvas,context) {
    this.canvas = canvas;

    /* Images */
    this.tile = new Image(context,'tile',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
}

Map.prototype.render = function(dragging_x,dragging_y) {
    /* Calc center of viewport */
    let center = {
        x: Math.round( this.canvas.width / 2 ),
        y: Math.round( this.canvas.height / 2 ),
    };

    /* Map size change */
    center.x = center.x - Math.round( tile.width / 2 );
    center.y = center.y - Math.round( tile.height / 2 );

    this.tile.render(
        center.x - dragging_x,
        center.y - dragging_y
    );
}

/* Render */
function setDungeonName() {
    let h1 = document.getElementById('dungeon-name');
    h1.textContent = 'Dungeon Name';
}

function renderDungeon(canvas,context,dragging_x,dragging_y) {
    /* Background */
    let background = document.getElementById('background');
    let pattern = context.createPattern(background, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, canvas.width, canvas.height);

    let map = new Map(canvas,context);
    map.render(dragging_x,dragging_y);
}

function resizeCanvas(x=0,y=0) {
    let canvas=document.getElementById('dungeon');
    let context=canvas.getContext('2d');
    canvas.width = window.innerWidth - CANVAS_BORDER;
    canvas.height = window.innerHeight - CANVAS_BORDER;
    renderDungeon(canvas,context,x,y);
}

/* JS Events */
window.onload = function() {
    setDungeonName();
    resizeCanvas();
};

window.addEventListener('resize', resizeCanvas, false);

let mouse = new Mouse();
document.addEventListener("mousedown", function(event){
    mouse.mousedown(event);
}, false);
document.addEventListener("mousemove", function(event){
    mouse.mousemove(event,resizeCanvas);
}, false);
document.addEventListener("mouseup", function(event){
    mouse.mouseup(event);
}, false);

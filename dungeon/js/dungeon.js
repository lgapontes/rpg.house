/* Adjust floors */
if (mapArchetype.size.currentFloor < 0) {
    mapArchetype.size.currentFloor = 0;
}
if (mapArchetype.size.currentFloor > mapArchetype.size.lastFloor) {
    mapArchetype.size.currentFloor = mapArchetype.size.lastFloor;
}

if (mapArchetype == MAP_SELECTED.lowTower) {
    mapArchetype.size.lastFloor = 2;
} else if (mapArchetype == MAP_SELECTED.tower) {
    mapArchetype.size.lastFloor = 6;
} else if (mapArchetype == MAP_SELECTED.highTower) {
    mapArchetype.size.lastFloor = 12;
}

mapArchetype.size.containsExit = CONTAINS_EXIT;
if (mapArchetype.size.lastFloor > 0) {
    mapArchetype.size.containsExit = true;
}

if (mapArchetype.size.lastFloor > 0) {
    if( NEXT_FLOOR_LINK.indexOf('lastFloor') == -1){
      NEXT_FLOOR_LINK += '&lastFloor=' + mapArchetype.size.lastFloor;
    }
}

/* User Interface */
var SHOW_INDEXES = DEBUG;

var MAP_TYPE = mapArchetype.type;
var NUMBER_OF_FLOOR = mapArchetype.size.currentFloor;
var NUMBER_OF_LAST_FLOOR = mapArchetype.size.lastFloor;

let DOORS = [];

let IN_STAIRS = { click: function(x,y) { return false; } };
let OUT_STAIRS = { click: function(x,y) { return false; } };

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
    if (!checkStairsClick(x,y)) {
        this.dragging = true;
        this.start_x = x;
        this.start_y = y;
    }
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

function Image(file,width,height,percent=1) {
    this.file=file;
    this.width = width * percent;
    this.height = height * percent;
}

Image.prototype.render = function(x,y) {
    context.drawImage(
        document.getElementById(this.file),
        x,y,
        this.width,
        this.height
    );
}

/*
Image.factory = function(obj) {
    return factory(obj,Image.prototype);
}
*/

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

/*
Passage.factory = function(obj) {
    return factory(obj,Passage.prototype);
}
*/

function Door(type,open) {
    this.type = type;
    this.open = false;
    this.images = [];
    this.setArea(0,0);

    if (this.type === DOOR_TYPE.top) {
        this.images.push(new Image('door-closed-top',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
    } else if (this.type === DOOR_TYPE.left) {
        this.images.push(new Image('door-closed-left',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
    }
}

Door.prototype.setArea = function(x,y) {
    this.area = {
        a: {x: x, y: y},
        b: {x: (x + DOOR_WIDTH) * DEFAULT_PERCENT, y: (y + DOOR_HEIGHT) * DEFAULT_PERCENT}
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
        this.images.push(new Image('door-open-top-border',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        this.images.push(new Image('door-open-top-transparent',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
    } else if (this.type === DOOR_TYPE.left) {
        this.images.push(new Image('door-open-left-border',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
        this.images.push(new Image('door-open-left-transparent',DOOR_WIDTH,DOOR_HEIGHT,DEFAULT_PERCENT));
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

/*
Door.factory = function(obj) {
    let door = factory(obj,Door.prototype);

    let images = [];
    for (let i=0; i<obj.images.length; i++) {
        images.push(Image.factory(obj.images[i]));
    }
    door.images = images;

    return door;
}
*/

function Tile(scaffold) {
    Image.call(this,MAP_TYPE.tile,TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    this.code = repository.nextTile();
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
    this.borders = createTileBorders(scaffold);
    this.passage = undefined;
}

Tile.prototype.setInputGateway = function() {
    if (this.gatewayStairs) {
        this.inputGateway = new Image(
            MAP_TYPE.stairs,
            STAIRS_WIDTH,
            STAIRS_HEIGHT,
            DEFAULT_PERCENT
        );
    } else {
        this.inputGateway = new Image(
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
            MAP_TYPE.stairs,
            STAIRS_WIDTH,
            STAIRS_HEIGHT,
            DEFAULT_PERCENT
        );
    } else {
        this.exitGateway = new Image(
            'gateway',
            GATEWAY_WIDTH,
            GATEWAY_HEIGHT,
            DEFAULT_PERCENT
        );
    }
}

Tile.prototype.createDoor = function(type) {
    this.door = new Door(type);
    DOORS.push(this.door);
}

Tile.prototype.createPassage = function(link) {
    this.passage = new Passage(link);
    return this.passage;
}

Tile.prototype.render = function(x,y,open,next) {
    if (open && (this.inputGateway !== undefined) && this.gatewayStairs) {
        let calcX = x+36;
        let calcY = y-22;
        this.inputGateway.render(calcX,calcY);

        IN_STAIRS = {
            a: { x: calcX, y: calcY },
            b: { x: (calcX + STAIRS_WIDTH) * DEFAULT_PERCENT, y: (calcY + STAIRS_HEIGHT) * DEFAULT_PERCENT },
            click: function(x,y) {
                if ( (x >= this.a.x) && (x <= this.b.x) ) {
                    if ( (y >= this.a.y) && (y <= this.b.y) ) {
                        return true;
                    }
                }
                return false;
            }
        };
    }

    if (open) Image.prototype.render.call(this,x,y);
    this.memory.x = x;
    this.memory.y = y;
    if (this.passage !== undefined) { this.passage.setPosition(x,y); }

    if (open && SHOW_INDEXES) {
        context.font=DEFAULT_FONT_FAMILY;
        context.fillStyle = DEFAULT_FONT_COLOR;
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

        context.fillText(
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
            let calcX = x-80;
            let calcY = y+2;
            this.exitGateway.render(calcX,calcY);
            OUT_STAIRS = {
                a: { x: calcX, y: calcY },
                b: { x: (calcX + STAIRS_WIDTH) * DEFAULT_PERCENT, y: (calcY + STAIRS_HEIGHT) * DEFAULT_PERCENT },
                click: function(x,y) {
                    if ( (x >= this.a.x) && (x <= this.b.x) ) {
                        if ( (y >= this.a.y) && (y <= this.b.y) ) {
                            return true;
                        }
                    }
                    return false;
                }
            };
        } else {
            this.exitGateway.render(x-29,y-51);
        }
    }

    /*
    TODO furniture tests
    if (this.index == '4') {
        let furniture = new Furniture(1);
        furniture.render(x,y);
    }
    if (this.index == '32') {
        let furniture = new Furniture(8);
        furniture.render(x,y);
    }
    if (this.index == '36') {
        let furniture = new Furniture(6);
        furniture.render(x,y);
    }
    */
}

/*
Tile.factory = function(obj) {
    obj = factory(obj,Tile.prototype);

    obj.inputGateway = Image.factory(obj.inputGateway);
    obj.exitGateway = Image.factory(obj.exitGateway);
    obj.borders.top = Image.factory(obj.borders.top);
    obj.borders.right = Image.factory(obj.borders.right);
    obj.borders.bottom = Image.factory(obj.borders.bottom);
    obj.borders.left = Image.factory(obj.borders.left);

    if (obj.passage !== undefined) {
        obj.passage = Passage.factory(obj.passage);
    }

    if (obj.door !== undefined) {
        obj.door = Door.factory(obj.door);
        DOORS.push(obj.door);
    }

    return obj;
}
*/

/*
function Furniture(index) {
    this.scaffold = FURNITURE_TYPES[index];
    this.image = new Image(
        this.scaffold.image,
        this.scaffold.size.width,
        this.scaffold.size.height,
        DEFAULT_PERCENT
    );
}

Furniture.prototype.render = function(x,y) {
    this.image.render(
        x+this.scaffold.adjustPosition.x,
        y+this.scaffold.adjustPosition.y
    );
}
*/

function Room(randomSize,inputGateway,exitGateway,containsTopDoor,containsLeftDoor,isHallway,isAuxiliary,currentFloor,lastFloor) {
    this.code = repository.nextRoom();

    let indexesInputGateway = [];
    let indexesExitGateway = [];
    let indexesBottomPassage = [];
    let indexesRightPassage = [];
    let indexesLeftDoor = [];
    let indexesTopDoor = [];
    let tiles = [];

    let tower = (MAP_TYPE.index == MAP_TYPES.tower.index);
    if (tower) {
        if (currentFloor < lastFloor) {
            exitGateway = true;
        }
    }

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

        let tile = new Tile(scaffold);
        tiles.push(tile);

        if (!tile.borders.bottom.nullable && tile.acceptDoor) { indexesBottomPassage.push(index); }
        if (!tile.borders.right.nullable && tile.acceptDoor) { indexesRightPassage.push(index); }
        if (!tile.borders.left.nullable && tile.acceptDoor) { indexesLeftDoor.push(index); }
        if (!tile.borders.top.nullable && tile.acceptDoor) { indexesTopDoor.push(index); }
    });

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
    if (relationships.has(this.code)) {
        let parent = relationships.getParent(this.code);
        return parent.doorIsOpen();
    }

    /*
    if (this.parent !== undefined) {
        return this.parent.doorIsOpen();
    }
    */
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

/*
Room.factory = function(obj) {

    obj = factory(obj,Room.prototype);

    let tiles = [];
    for (let i=0; i<obj.tiles.length; i++) {
        tiles.push( Tile.factory(obj.tiles[i]) );
    }
    obj.tiles = tiles;

    if (obj.bottomPassage !== undefined) {
        obj.bottomPassage = Passage.factory(obj.bottomPassage);
    }
    if (obj.rightPassage !== undefined) {
        obj.rightPassage = Passage.factory(obj.rightPassage);
    }

    if (obj.topDoor !== undefined) {
        obj.topDoor = Door.factory(obj.topDoor);
        for (let i=0; i<obj.tiles.length; i++) {
            if (obj.topDoor.pointer.code == obj.tiles[i].code) {
                obj.topDoor.pointer = obj.tiles[i];
            }
        }
    }
    if (obj.leftDoor !== undefined) {
        obj.leftDoor = Door.factory(obj.leftDoor);
        for (let i=0; i<obj.tiles.length; i++) {
            if (obj.leftDoor.pointer.code == obj.tiles[i].code) {
                obj.leftDoor.pointer = obj.tiles[i];
            }
        }
    }

    return obj;
}
*/

function Relationships() {
    this.list = [];
}

Relationships.prototype.set = function(parentCode,childCode) {
    this.list[childCode] = parentCode;
}

Relationships.prototype.getParent = function(childCode) {
    let code = this.list[childCode];
    return findParentByCode(map.mainRoom,code);
}

/* Auxiliary method of relationships */
function findParentByCode(room,code) {
    if (room === undefined) return;

    let parent = undefined;
    if (room.code === code) {
        return room;
    } else {
        parent = findParentByCode(room.next.bottom,code);
        if (parent === undefined) {
            parent = findParentByCode(room.next.left,code);
        }
    }

    return parent;
}

Relationships.prototype.has = function(childCode) {
    return (this.list[childCode] !== undefined);
}

/**********************************************************************************************************/
/************************************************** MAP ***************************************************/
/**********************************************************************************************************/
function Map(uuid,numberOfRooms,minorSize,majorSize,containsHallway,containsExit,currentFloor,lastFloor) {
    this.uuid = uuid;

    this.numberOfBottomRooms = Math.floor(numberOfRooms / 2);
    this.countBottomRooms = 0;
    this.numberOfLeftRooms = (numberOfRooms - this.numberOfBottomRooms) - 1;
    this.countLeftRooms = 0;

    this.minorSize = minorSize;
    this.majorSize = majorSize;
    this.flatAuxiliaryRoom = true;

    let house = (MAP_TYPE.index == MAP_TYPES.home.index);
    this.model = (numberOfRooms < 5 || house) ? 0 : randomBetween(0,3);
    this.containsHallway = containsHallway;
    this.containsExit = containsExit;
    this.exitGatewayCount = 0;
    this.focusedRoom = undefined;

    this.currentFloor = currentFloor;
    this.lastFloor = lastFloor;

    /* Create Main Room */
    this.mainRoom = this.createRoom(false,false,true,false,false,false,false,-1);
    //this.mainRoom.parent = undefined;

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
            result = (this.model === 0) ? randomBoolean() : true;
            if (result) {
                this.exitGatewayCount = -1;
            } else {
                this.exitGatewayCount = 1;
            }
        } else if (this.exitGatewayCount == 1) {
            result = true;
            this.exitGatewayCount = -1;
        }
    }

    if (result && !CONTAINS_EXIT && (this.lastFloor > 0) && (this.lastFloor == this.currentFloor)) {
        result = false;
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

                relationships.set(room.code,room.next.left.code);
                //room.next.left.parent = room;

                room = room.next.left;
            }

            let exitGateway = this.containsExit && isLast && (this.model !== 2);
            room.next.left = this.createRoom(false,true,false,exitGateway,isFirst,isSecondAndRequiredHallway,isLast,randomScaffold.index);

            relationships.set(room.code,room.next.left.code);
            //room.next.left.parent = room;

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

                relationships.set(room.code,room.next.bottom.code);
                //room.next.bottom.parent = room;

                room = room.next.bottom;
            }

            let exitGateway = this.containsExit && isLast && (this.model !== 1);
            room.next.bottom = this.createRoom(true,false,false,exitGateway,isFirst,isSecondAndRequiredHallway,isLast,randomScaffold.index);

            relationships.set(room.code,room.next.bottom.code);
            //room.next.bottom.parent = room;

            room = room.next.bottom;
        }
        this.countBottomRooms++;
    }
    return room;
}

Map.prototype.createHallway = function(left,requiredHallway) {
    let random = left ? getRandomLeftHallway(requiredHallway) : getRandomBottomHallway(requiredHallway);
    let hallway = new Room(
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

    let randomMinorSize = this.minorSize;
    if (inputGateway) {
        randomMinorSize = 'medium';
        if (this.minorSize == 'big') randomMinorSize = 'big';
        if (this.minorSize == 'veryBig') randomMinorSize = 'veryBig';
    }
    let random = getRandomRoom( randomMinorSize , this.majorSize );

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

            relationships.set(room.code,auxiliaryRoom.code);
            //auxiliaryRoom.parent = room;
        }
    }

    if ( !(isLast && (this.model === 1)) && !(fork.length > 0) && !(isFirst && (this.focusedRoom !== undefined)) ) {
        if (((this.countBottomRooms > 0) || this.flatAuxiliaryRoom) && passageRight && (random.acceptLeftRoom > -1) && containsTopDoor && randomPercent(70)) {
            let auxiliaryRoom = new Room(
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

            relationships.set(room.code,auxiliaryRoom.code);
            //auxiliaryRoom.parent = room;
        }
    }

    return room;
}

Map.prototype.background = function() {
    let background = document.getElementById('background');
    let pattern = context.createPattern(background, 'repeat');
    context.fillStyle = pattern;
    context.fillRect(0, 0, canvas.width, canvas.height);
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
        x: Math.round( canvas.width / 3 ),
        y: Math.round( canvas.height / 4 ),
    };

    /* Map size change */
    center.x = center.x - Math.round( TILE_WIDTH / 2 );
    center.y = center.y - Math.round( TILE_HEIGHT / 2 );

    let printX = center.x - dragging_x;
    let printY = center.y - dragging_y;

    this.renderRoom(this.mainRoom,printX,printY);
}

/*
Map.factory = function(obj) {
    obj = factory(obj,Map.prototype);

    if (obj.focusedRoom !== undefined) {
        obj.focusedRoom = Room.factory(obj.focusedRoom);
    }
    obj.mainRoom = Room.factory(obj.mainRoom);

    return obj;
}
*/

/* Global Instances */
let canvas=document.getElementById('dungeon');
let context=canvas.getContext('2d');
let map = undefined;
let mouse = new Mouse();
let relationships = new Relationships();

/* Auxiliary Functions */
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

    let tower = (MAP_TYPE.index == MAP_TYPES.tower.index);
    if (tower) { indexScaffold = 14 }

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

function createTileBorders(scaffold) {
    let corner = { render: function(x,y){}, nullable: true }
    let borders = { top: corner, right: corner, bottom: corner, left: corner };
    if (scaffold.borders.top) {
        borders.top = new Image('tile-corner-top',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    }
    if (scaffold.borders.right) {
        borders.right = new Image('tile-corner-right',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    }
    if (scaffold.borders.bottom) {
        borders.bottom = new Image('tile-corner-bottom',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
    }
    if (scaffold.borders.left) {
        borders.left = new Image('tile-corner-left',TILE_WIDTH,TILE_HEIGHT,DEFAULT_PERCENT);
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

function checkStairsClick(x,y) {
    if (IN_STAIRS.click(x,y)) {
        console.log('In stairs clicked');
        window.close();
        return true;
    }
    if (OUT_STAIRS.click(x,y)) {
        console.log('Out stairs clicked');
        window.open(NEXT_FLOOR_LINK, '_blank');
        window.focus();
        return true;
    }
    return false;
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
    h1.textContent = DUNGEON_NAME + floor;
}

function resizeCanvas(dragging_x,dragging_y) {
    canvas.width = window.innerWidth - CANVAS_BORDER;
    canvas.height = window.innerHeight - CANVAS_BORDER;

    if (map === undefined) {
        map = new Map(
            UUID,
            mapArchetype.size.numberOfRooms,
            mapArchetype.size.minorSize,
            mapArchetype.size.majorSize,
            mapArchetype.size.containsHallway,
            mapArchetype.size.containsExit,
            mapArchetype.size.currentFloor,
            mapArchetype.size.lastFloor
        );
    }
    map.render(dragging_x,dragging_y);
}

/* JS Events */
window.onload = function() {
    setDungeonName();
    resizeCanvas(0,0);
    document.querySelector('div.loading').classList.add('loading-done');
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

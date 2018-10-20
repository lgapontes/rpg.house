var repository = {
    sequenceRoom: 0,
    nextRoom: function() {
        this.sequenceRoom = this.sequenceRoom + 1;
        return this.sequenceRoom;
    },
    save: function(map) {

        let obj = Object.assign({}, map);
        //removeProp(obj,'parent')
        /*
        delete obj.context;
        delete obj.mainRoom.context;
        obj.mainRoom.tiles.forEach(function(entry){
            if (!entry.borders.bottom.nullable) {
                delete entry.borders.bottom.context;
            }
        });
        */


        console.log(map);
        console.log(obj);
        console.log(map == obj);
        //console.log('Map ' + map.uuid + ' saved');
    }
}

/* https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript */
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function removeProp(obj, propToDelete) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                removeProp(obj[property], propToDelete);
            } else {
                if (property === propToDelete && obj[property] === true) {
                    delete obj[property];
                }
            }
        }
    }
}

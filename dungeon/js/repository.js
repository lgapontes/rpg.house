var repository = {

    sequenceRoom: 0,
    nextRoom: function() {
        this.sequenceRoom = this.sequenceRoom + 1;
        return this.sequenceRoom;
    },
    sequenceTile: 0,
    nextTile: function() {
        this.sequenceTile = this.sequenceTile + 1;
        return this.sequenceTile;
    },

    // TODO
    save: function(map,relationships) {

        //console.log(map);

        /* Convert to JSON */
        let json = JSON.stringify({
            map: map,
            relationships: relationships
        });

        //console.log(json);
        //console.log('Map ' + map.uuid + ' saved');
    },

    // TODO
    load: function(json) {

    }
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function factory(obj,prototype) {
    for (let property in prototype) {
        obj[property] = prototype[property];
    }
    console.log(obj);
    return obj;
}

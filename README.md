# rpg.house

## Links

Editor Pixels Online: https://www.piskelapp.com/

## MacOS

### Access and use MongoDB

```
mongod --auth --bind_ip 127.0.0.1 --port 27017 --dbpath /Users/lgapontes/developer/mongodb/data

mongo --port 27017 -u "userRPGHouse" -p "123andgo" --authenticationDatabase "rpghouse"

use rpghouse
db.dungeons.find()
db.dungeons.find({code: '2jdWbXH'})
```

### Config MongoDB

```
mongod --bind_ip 127.0.0.1 --port 27017 --dbpath /Users/lgapontes/developer/mongodb/data

mongo --port 27017

use admin

db.createUser(
  {
    user: "admin",
    pwd: "123andgo",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

exit

mongod --auth --bind_ip 127.0.0.1 --port 27017 --dbpath /Users/lgapontes/developer/mongodb/data

mongo --port 27017 -u "admin" -p "123andgo" --authenticationDatabase "admin"

use rpghouse

db.createUser(
  {
    user: "userRPGHouse",
    pwd: "123andgo",
    roles: [ { role: "readWrite", db: "rpghouse" } ]
  }
)

exit

mongo --port 27017 -u "userRPGHouse" -p "123andgo" --authenticationDatabase "rpghouse"
exit
```

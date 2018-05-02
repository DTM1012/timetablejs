const Sequelize = require('sequelize');
const sequelize = new Sequelize('glpkdb', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});

let lecturerSchema = require('./schema/lecturer.js');
let Lecturer = sequelize.define(lecturerSchema.tableName, lecturerSchema.schema);

let classSchema = require('./schema/class.js');
let Class = sequelize.define(classSchema.tableName, classSchema.schema);

let roomSchema = require('./schema/room.js');
let Room = sequelize.define(roomSchema.tableName, roomSchema.schema);

let slotSchema = require('./schema/slot.js');
let Slot = sequelize.define(slotSchema.tableName, slotSchema.schema);

let LecturerClass = sequelize.define('lecturer_class', {
    value : {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

let LecturerSlot = sequelize.define('lecturer_slot', {
    value : {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

let RoomClass = sequelize.define('room_class', {
    value : {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    }
});

let Timetable = sequelize.define('result', {
    idLecturer : {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    idClass : {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    idRoom : {
        type: Sequelize.INTEGER,
        allowNull: false

    }, 
    idSlot : {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    value : {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});
Lecturer.belongsToMany(Class, {
    through: LecturerClass,
    foreignKey: 'idLecturer'
});
Class.belongsToMany(Lecturer, {
    through: LecturerClass,
    foreignKey: 'idClass'
});

Lecturer.belongsToMany(Slot, {
    through: LecturerSlot,
    foreignKey: 'idLecturer'
});
Slot.belongsToMany(Lecturer, {
    through: LecturerSlot,
    foreignKey: 'idSlot'
});

Room.belongsToMany(Class, {
    through: RoomClass,
    foreignKey: 'idRoom'
});
Class.belongsToMany(Room, {
     through: RoomClass,
     foreignKey: 'idClass'
});

sequelize.sync(function() {
     console.log('db created');
});
setTimeout(function() {
    Slot.findAll().then(function(slots) {
        if(!slots.length) {
           for(var i = 1; i <= 25; i++) {
                var slot = {
                    idSlot : i,
                    name : 'S' + i,
                    priority : (25 - i)
                }
                Slot.create(slot).then(function(s){
                    
                });
            }; 
        }
    });
}, 2000);

module.exports = {
    Lecturer : Lecturer,
    Class : Class,
    Room : Room,
    Slot : Slot,
    LecturerClass : LecturerClass,
    LecturerSlot : LecturerSlot,
    RoomClass : RoomClass,
    Timetable : Timetable
}
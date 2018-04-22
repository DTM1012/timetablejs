const Sequelize = require('sequelize');
const sequelize = new Sequelize('glpk', 'root', '123456', {
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

Promise.all([Lecturer.create(), Class.create()])
    .then(([lecturer, cl]) => Lecturer.create({idLecturer: lecturer.idLecturer, idClass: cl.idClass}));


module.exports = {
  Lecturer : Lecturer,
  Class : Class,
  Room : Room,
  Slot : Slot
}
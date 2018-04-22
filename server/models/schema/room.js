var Sequelize = require('sequelize');

var roomSchema = {
	schema: {
		idRoom: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		capacity: {
			type: Sequelize.INTEGER
		}
	},
	tableName: 'room'
};

module.exports = roomSchema;
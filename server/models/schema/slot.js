var Sequelize = require('sequelize');

var slotSchema = {
	schema: {
		idSlot: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		priority: {
			type: Sequelize.INTEGER
		}
	},
	tableName: 'slot'
};

module.exports = slotSchema;
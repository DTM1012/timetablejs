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
		}
	},
	tableName: 'slot'
};

module.exports = slotSchema;
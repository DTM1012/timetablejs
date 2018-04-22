var Sequelize = require('sequelize');

var classSchema = {
	schema: {
		idClass: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: Sequelize.STRING
		},
		credit: {
			type: Sequelize.INTEGER
		},
		demand: {
			type: Sequelize.INTEGER
		}
	},
	tableName: 'class'
};

module.exports = classSchema;
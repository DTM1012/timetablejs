var Sequelize = require('sequelize');
var lecturerSchema = {
	schema: {
		idLecturer: {
	    	type: Sequelize.INTEGER,
	    	primaryKey : true,
	    	autoIncrement: true
	  	},
	  	name: {
	    	type: Sequelize.STRING
	  	}	
	},
	tableName: 'lecturer'
	
};
module.exports = lecturerSchema;
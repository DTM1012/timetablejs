var express = require('express');
var models = require('../models/index.js');

var router = express.Router();

var RoomClass = models.RoomClass;

router.post('/new', function(req, res) {
	console.log("New");
	res.send("New " + JSON.stringify(req.body) );

});

router.post('/edit', function(req, res) {
	RoomClass.update(
			{ value: req.body.value } , 
	      	{ where: { 
	      		idRoom : req.body.idRoom,
	      		idClass : req.body.idClass
	      		}
	      	} 
		).then(function(rc) {
		res.send( {
			code : 200,
			message : "success",
			data : rc
		})
	}).catch(function(err) {
		res.send( {
			code : -200,
			message: err.message,
			data : err.stack
		});
	});
});

router.post('/delete', function(req, res) {
	console.log("Delete");
	res.send("Delete");
});

router.post('/list', function(req, res) {
	RoomClass.findAll()
	.then(function(results){
		res.send( {
			code: 200,
			message: 'success',
			data: results.map(function(rc) {
				return rc.get();
			})
		})
	})
	.catch(function(err) {
		res.send( {
			code : -200,
			message: err.message,
			data : err.stack
		});
	});
});
module.exports = router;
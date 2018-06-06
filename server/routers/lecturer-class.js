var express = require('express');
var models = require('../models/index.js');

var router = express.Router();

var LecturerClass = models.LecturerClass;

router.post('/new', function(req, res) {
	console.log("New");
	res.send("New " + JSON.stringify(req.body) );

});

router.post('/edit', function(req, res) {
	LecturerClass.update(
			{ value: req.body.value } , 
	      	{ where: { 
	      		idLecturer : req.body.idLecturer,
	      		idClass : req.body.idClass
	      		}
	      	} 
		).then(function(lc) {
		res.send( {
			code : 200,
			message : "success",
			data : lc
		})
	}).catch(function(err) {
		res.send( {
			code : -200,
			message: err.message,
			data : err.stack
		});
	});
});

router.post('/list', function(req, res) {
	LecturerClass.findAll()
	.then(function(results){
		res.send( {
			code: 200,
			message: 'success',
			data: results.map(function(lc) {
				return lc.get();
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
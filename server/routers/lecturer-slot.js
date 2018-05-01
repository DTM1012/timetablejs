var express = require('express');
var models = require('../models/index.js');

var router = express.Router();

var LecturerSlot = models.LecturerSlot;

router.post('/new', function(req, res) {
	console.log("New");
	res.send("New " + JSON.stringify(req.body) );

});

router.post('/edit', function(req, res) {
	LecturerSlot.update(
			{ value: req.body.value } , 
	      	{ where: { 
	      		idLecturer : req.body.idLecturer,
	      		idSlot : req.body.idSlot
	      		}
	      	} 
		).then(function(ls) {
		res.send( {
			code : 200,
			message : "success",
			data : ls
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
	LecturerSlot.findAll()
	.then(function(results){
		res.send( {
			code: 200,
			message: 'success',
			data: results.map(function(ls) {
				return ls.get();
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
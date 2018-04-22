var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

var Lecturer = models.Lecturer;

router.post('/new', function(req, res) {
	console.log("Create New Lecturer");
	let newLecturer = req.body;
	Lecturer.create(newLecturer).then(function(l){
		console.log(l.get());
		res.send( {
			code : 200,
			message : "success",
			data : l.get()
		});
	}).catch(function(err){
		res.send( {
			code : -200,
			message: err.message,
			data : err.stack
		});
	});

});

router.post('/edit', function(req, res) {
	console.log("edit lecturer", req.body);
	Lecturer.update(
			{ name: req.body.name } , 
	      	{ where: { idLecturer : req.body.idLecturer }} 
		).then(function(l) {
		res.send( {
			code : 200,
			message : "success",
			data : l
		})
	}).catch(function(err) {
		res.send( {
			code : -200,
			message: err.message,
			data : err.stack
		});
	});
});

router.delete('/delete', function(req, res) {
	console.log("reqBody", req);
	Lecturer.destroy({
		where: {
			idLecturer: req.body.idLecturer
		}
	}).then(function(l) {
		res.send( {
			code : 200,
			message : "success",
			data : l
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
	Lecturer.findAll()
	.then(function(lecturers){
		res.send( {
			code: 200,
			message: 'success',
			data: lecturers.map(function(l) {
				return l.get();
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
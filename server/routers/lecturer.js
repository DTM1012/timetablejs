var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

var Lecturer = models.Lecturer;
var Class = models.Class;
var Slot = models.Slot;

var LecturerClass = models.LecturerClass;
var LecturerSlot = models.LecturerSlot;

router.post('/new', function(req, res) {
	let newLecturer = req.body;
	Lecturer.create(newLecturer).then(function(l){
		Class.findAll().then(function(classes) {
			classes.forEach(function(c) {
				let prepareData = {
					idLecturer: l.get().idLecturer,
					idClass: c.get().idClass,
					value: false
				};
				LecturerClass.create(prepareData).then(function(lc) {
					console.log("lccc", lc);
				});
			});
		});
		Slot.findAll().then(function(slots) {
			slots.forEach(function(s) {
				let prepareData = {
					idLecturer: l.get().idLecturer,
					idSlot: s.get().idSlot,
					value: true
				};
				LecturerSlot.create(prepareData).then(function(ls) {
					console.log(ls);
				});
			});
		});

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
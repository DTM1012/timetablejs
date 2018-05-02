var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

var Class = models.Class;
var Lecturer = models.Lecturer;
var Room = models.Room;

var LecturerClass = models.LecturerClass;
var RoomClass = models.RoomClass;

router.post('/new', function(req, res) {
	let newClass = req.body;
	Class.create(newClass).then(function(c){
		Lecturer.findAll().then(function(lecturers) {
			lecturers.forEach(function(l) {
				let prepareData = {
					idLecturer: l.get().idLecturer,
					idClass: c.get().idClass,
					value: true
				};
				LecturerClass.create(prepareData).then(function(lc) {
					console.log(lc);
				});
			});
		});
		Room.findAll().then(function(rooms) {
			rooms.forEach(function(r) {
				let prepareData = {
					idRoom: r.get().idRoom,
					idClass: c.get().idClass,
					value: true
				};
				RoomClass.create(prepareData).then(function(rc) {
					console.log(rc);
				});
			});
		});
		res.send( {
			code : 200,
			message : "success",
			data : c.get()
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
	Class.update(
			{ 
				name: req.body.name,  
				credit: req.body.credit,
				demand: req.body.demand
			} , 
	      	{ where: { idClass : req.body.idClass }} 
		).then(function(c) {
		res.send( {
			code : 200,
			message : "success",
			data : c
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
	console.log("reqBody", req.body);
	Class.destroy({
		where: {
			idClass: req.body.idClass
		}
	}).then(function(c) {
		res.send( {
			code : 200,
			message : "success",
			data : c
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
	Class.findAll()
	.then(function(classes){
		res.send( {
			code: 200,
			message: 'success',
			data: classes.map(function(c) {
				return c.get();
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
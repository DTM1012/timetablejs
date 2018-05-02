var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

var Room = models.Room;
var Class = models.Class;

var RoomClass = models.RoomClass;

router.post('/new', function(req, res) {
	let newRoom = req.body;
	Room.create(newRoom).then(function(r){
		Class.findAll().then(function(classes) {
			classes.forEach(function(c) {
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
			data : r.get()
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
	Room.update(
			{ 
				name: req.body.name,
				capacity: req.body.capacity
			} , 
	      	{ where: { idRoom : req.body.idRoom }} 
		).then(function(r) {
		res.send( {
			code : 200,
			message : "success",
			data : r
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
	Room.destroy({
		where: {
			idRoom: req.body.idRoom
		}
	}).then(function(r) {
		res.send( {
			code : 200,
			message : "success",
			data : r
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
	Room.findAll()
	.then(function(rooms){
		res.send( {
			code: 200,
			message: 'success',
			data: rooms.map(function(r) {
				return r.get();
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
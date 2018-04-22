var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

var Room = models.Room;

router.post('/new', function(req, res) {
	let newRoom = req.body;
	Room.create(newRoom).then(function(l){
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
	Room.update(
			{ 
				name: req.body.name,
				capacity: req.body.capacity
			} , 
	      	{ where: { idRoom : req.body.idRoom }} 
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
	console.log("reqBody", req.body);
	Room.destroy({
		where: {
			idRoom: req.body.idRoom
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
	Room.findAll()
	.then(function(rooms){
		res.send( {
			code: 200,
			message: 'success',
			data: rooms.map(function(l) {
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
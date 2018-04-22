var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

var Class = models.Class;

router.post('/new', function(req, res) {
	let newClass = req.body;
	Class.create(newClass).then(function(l){
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
	Class.update(
			{ 
				name: req.body.name,  
				credit: req.body.credit,
				demand: req.body.demand
			} , 
	      	{ where: { idClass : req.body.idClass }} 
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
	Class.destroy({
		where: {
			idClass: req.body.idClass
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
	Class.findAll()
	.then(function(classes){
		res.send( {
			code: 200,
			message: 'success',
			data: classes.map(function(l) {
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
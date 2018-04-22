var express = require('express');

var router = express.Router();

router.post('/new', function(req, res) {
	console.log("New");
	res.send("New " + JSON.stringify(req.body) );

});

router.post('/edit', function(req, res) {
	console.log("Edit");
	res.send("Edit");
});

router.post('/delete', function(req, res) {
	console.log("Delete");
	res.send("Delete");
});

module.exports = router;
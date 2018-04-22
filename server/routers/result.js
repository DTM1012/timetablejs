var express = require('express');

var router = express.Router();

router.post('/info', function(req, res) {
	res.send("New " + JSON.stringify(req.body) );

});

module.exports = router;
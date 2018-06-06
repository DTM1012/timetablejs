var express = require('express');
var models = require('../models/index.js');

var router = express.Router();
var Slot = models.Slot;
router.post('/new', function(req, res) {
	for(var i = 1; i <= 25; i++) {
        var slot = {
            name : 'S' + i
        }
        Slot.create(slot).then(function(s){
        });
    };
});

router.post('/list', function(req, res) {
    Slot.findAll()
    .then(function(slots){
        res.send( {
            code: 200,
            message: 'success',
            data: slots.map(function(s) {
                return s.get();
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
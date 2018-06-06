var express = require('express');
var models = require('../models/index.js');
var router = express.Router();

var Timetable = models.Timetable;
router.post('/info', function(req, res) {
	Timetable.findAll()
	.then(function(rows){
		res.send( {
			code: 200,
			message: 'success',
			data: rows.map(function(r) {
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
router.post('/generate', function(req, res) {
    Timetable.destroy({
        where: {},
        truncate: true
    }).then(function(r) {
    	const { execFile } = require('child_process'); 
        execFile('glpsol', ['--model', 'glpk/glpk_file.mod'], function (err, stdout, stderr) {
            if (err || stderr.length) {
                res.send({
                	code : -200,
                	message: err || arguments
                });
            } else {
                res.send({
                	code : 200,
                	message : stdout
                });
            }
        });
    });


  /*  const cmd = "glpsol";
    const model = "--model";
    const file = "glpk/glpk_file.mod"
    const { spawn } = require('child_process');
    const ls = spawn(cmd, [model, file]);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });*/



});

module.exports = router;
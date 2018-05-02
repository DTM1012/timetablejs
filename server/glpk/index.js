const { spawn } = require('child_process');
const bat = spawn('cmd.exe', ['/c', 'my.sh']);

bat.stdout.on('data', (data) => {
  console.log("stdout",data.toString());
});

bat.stderr.on('data', (data) => {
  console.log("stderr",data.toString());
});

bat.on('exit', (code) => {
  console.log(`Child exited with code ${code}`);
});

// const { exec } = require('child_process'); 

/*exec('my.sh', function (err, stdout, stderr) {
    if (err || stderr.length) {
        console.log("stderr", stderr);
    } else {
        console.log("stdout", 1);
    }
});*/

/*const { execFile } = require('child_process'); 
execFile('glpsol', ['--model', 'glpk_file.mod'], function (err, stdout, stderr) {
	if (err || stderr.length) {
        console.log("stderr", stderr);
	} else {
        console.log("stdout", stdout);
	}
});*/
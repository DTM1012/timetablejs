var express = require('express');
var app = new express();

var lecturerRouter = require('./routers/lecturer.js');
var classRouter = require('./routers/class.js');
var roomRouter = require('./routers/room.js');
var slotRouter = require('./routers/slot.js');

/*var lcRouter = require('./routers/lecturer-class.js');
var lsRouter = require('./routers/lecturer-slot.js');
var rcRouter = require('./routers/room-class.js');*/

var resultRouter = require('./routers/result.js');

app.use(express.static('../client'));
app.use(express.json());
app.use('/lecturer', lecturerRouter);
app.use('/class', classRouter);
app.use('/room', roomRouter);
app.use('/slot', slotRouter);

let models = require('./models');

/*app.use('/lc', lcRouter);
app.use('/ls', lsRouter);
app.use('/rc', rcRouter);*/

app.use('/timetable', resultRouter);

app.listen(3000, function() {
	console.log("server started");
});

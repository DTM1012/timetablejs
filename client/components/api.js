'use strict';
function newLecturer(http, request, callback) {
	http({
		method: 'POST',
		url: '/lecturer/new', 
		data: request
	}).then(function(res) {
		if(callback) callback(res.data.data);
		
	}, function(err){
		console.error(err);
	});
};

function newClass(http, request, callback) {
	http({
		method: 'POST',
		url: '/class/new', 
		data: request
	}).then(function(res) {
		if(callback) callback(res.data.data);
		
	}, function(err){
		console.error(err);
	});
};

function newRoom(http, request, callback) {
	http({
		method: 'POST',
		url: '/room/new', 
		data: request
	}).then(function(res) {
		if(callback) callback(res.data.data);
		
	}, function(err){
		console.error(err);
	});
}

function listLecturer(http, callback) {
	http({
		method: 'POST',
		url: '/lecturer/list'
	}).then(function(res) {
		if(callback) callback(res.data.data);

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function listClass(http, callback) {
	http({
		method: 'POST',
		url: '/class/list'
	}).then(function(res) {
		if(callback) callback(res.data.data);

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function listRoom(http, callback) {
	http({
		method: 'POST',
		url: '/room/list'
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function listSlot(http, callback) {
	http({
		method: 'POST',
		url: '/slot/list'
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};

function listLecturerClass(http, callback) {
	http({
		method: 'POST',
		url: '/lecturer-class/list'
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
}
function editLCValue(http, request, callback){
	http({
		method: 'POST',
		url: '/lecturer-class/edit', 
		data: request
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
}

function listLecturerSlot(http, callback) {
	http({
		method: 'POST',
		url: '/lecturer-slot/list'
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
}
function editLSValue(http, request, callback){
	http({
		method: 'POST',
		url: '/lecturer-slot/edit', 
		data: request
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
}

function listRoomClass(http, callback) {
	http({
		method: 'POST',
		url: '/room-class/list'
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
}
function editRCValue(http, request, callback){
	http({
		method: 'POST',
		url: '/room-class/edit', 
		data: request
	}).then(function(res) {
		if(callback) callback(res.data.data);
	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function editLecturer(http, request, callback) {
	http({
		method: 'POST',
		url: '/lecturer/edit',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    },
		data: request
	}).then(function(res) {
		if(callback) callback(res);

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function editClass(http, request, callback) {
	http({
		method: 'POST',
		url: '/class/edit',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    },
		data: request
	}).then(function(res) {
		if(callback) callback(res)

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function editRoom(http, request, callback) {
	http({
		method: 'POST',
		url: '/room/edit',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    },
		data: request
	}).then(function(res) {
		if(callback) callback(res);

	}).catch(function(error) {
		if(callback) callback();
	});
};
function deleteLecturer(http, request, callback) {
	http({
		method: 'DELETE',
		url: '/lecturer/delete',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    },
		data: request
	}).then(function(res) {
		if(callback) callback(res)

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function deleteClass(http, request, callback) {
	http({
		method: 'DELETE',
		url: '/class/delete',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    },
		data: request
	}).then(function(res) {
		if(callback) callback(res)

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
};
function deleteRoom(http, request, callback) {
	http({
		method: 'DELETE',
		url: '/room/delete',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    },
		data: request
	}).then(function(res) {
		if(callback) callback(res)

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
}
function timetable(http, callback) {
	http({
		method: 'POST',
		url: '/timetable/info',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    }
	}).then(function(res) {
		if(callback) callback(res.data.data);

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});
}
function generate(http, callback) {
	http({
		method: 'POST',
		url: '/timetable/generate',
		headers: {
	        'Content-type': 'application/json;charset=utf-8'
	    }
	}).then(function(res) {
		if(callback) callback(res.data);

	}).catch(function(error) {
		console.log(error);
		if(callback) callback();
	});

}
module.exports = {
	listLecturer : listLecturer,
	listClass : listClass,
	listLecturerClass : listLecturerClass,
	editLCValue : editLCValue,
	listSlot : listSlot,
	listLecturerSlot : listLecturerSlot, 
	editLSValue : editLSValue, 
	listRoom : listRoom, 
	listRoomClass : listRoomClass,
	editRCValue : editRCValue,
	newLecturer : newLecturer,
	newClass : newClass,
	newRoom : newRoom,
	editLecturer : editLecturer,
	editClass : editClass,
	editRoom : editRoom,
	deleteLecturer : deleteLecturer,
	deleteClass : deleteClass,
	deleteRoom : deleteRoom,
	timetable : timetable,
	generate : generate
}
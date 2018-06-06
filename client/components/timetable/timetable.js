let timetable = 'timetable';
let api = require('../api');
angular.module(timetable, []).component(timetable, {
	template : require('html-loader!./timetable.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;
	this.tab = 1;
    this.setTab = function (tabId) {
        this.tab = tabId;
    };
    this.isSet = function (tabId) {
        return this.tab === tabId;
    };
    api.timetable($http, function(res) {
    	console.log("res", res);
    	self.data = res;
    	if(!self.data.length) {
    		console.log("empty");
    		self.errMess = "Input is invalid! Please check again!";
    	};
    	self.data.forEach(function(d) {
    		d.day = convertSlot(d.idSlot).day;
			d.period = convertSlot(d.idSlot).period;
    	});
    	api.listLecturer($http, function(lecturers) {
			if(lecturers) {
				self.lecturers = lecturers;
				api.listRoom($http, function(rooms) {
					if(rooms) {
						self.rooms = rooms;
						api.listClass($http, function(classes) {
							if(classes) {
								self.classes = classes;
								self.classes.forEach(function(c) {
									c.children = self.data.filter(d => d.class == c.name);
								});
								self.lecturerData = [];
								self.roomData = [];

								self.onSelectLect = function() {
									self.lecturerData = self.data.filter(d => d.lecturer == self.selectedLecturer.name);
								};

								self.onSelectRoom = function() {
									self.roomData = self.data.filter(d => d.room == self.selectedRoom.name);
								};
								self.getContent = function(slot, day, tab) {
									let str ='';
									if(tab == 1) {
										let content = self.data.filter(d => (d.period == slot && d.day == day));
										if(content.length) {
											content.forEach(function(c) {
												c.class = self.classes.find(cl => cl.idClass == c.idClass).name;
												c.lecturer = self.lecturers.find(l => l.idLecturer == c.idLecturer).name;
												c.room = self.rooms.find(r => r.idRoom == c.idRoom).name;
												str += (c.class + '-' + c.lecturer + '-' + c.room + ' \r\n');
											});
										}
									} else if (tab == 2) {
										let content = self.lecturerData.filter(d => (d.period == slot && d.day == day));
										if(content.length) {
											content.forEach(function(ld) {
												ld.class = self.classes.find(cl => cl.idClass == ld.idClass).name;
												ld.room = self.rooms.find(r => r.idRoom == ld.idRoom).name;

												str = (ld.class + '-' + ld.room);
											});
										}
									} else if (tab == 3) {
										let content = self.roomData.filter(d => (d.period == slot && d.day == day));
										if(content.length) {
											content.forEach(function(ld) {
												ld.class = self.classes.find(cl => cl.idClass == ld.idClass).name;
												ld.lecturer = self.lecturers.find(l => l.idLecturer == ld.idLecturer).name;
												str = (ld.class + '-' + ld.lecturer);
											});
										}
									};
									return str;
								};
							}
						});
					}
				});
			}
		});
    });
    
	function convertSlot (slot) {
		let day = null;
		let period = null;
		if(slot % 5 == 0) {
			day = slot / 5;
			period = 5;
		} else {
			day = Math.floor(slot / 5) + 1;
			period = slot % 5;
		};
		return {day: day, period: period};
	};
	
	
	this.periods = [{s: 1,time: '7:00-900'},{s: 2,time: '9:00-11:00'},{s: 3,time: '11:00-13:00'},{s: 4,time: '13:00-15:00'},{s: 5,time: '15:00-17:00'}];
};

module.exports = timetable;
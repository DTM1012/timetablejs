let lecturerSlot = 'lecturerSlot';
let api = require('../api');

angular.module(lecturerSlot, []).component(lecturerSlot, {
	template : require('html-loader!./lecturer-slot.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;
	this.$http = $http;
	function initApi(http) {
		api.listLecturer(http, function(lecturers) {
			self.lecturers = lecturers;
			api.listSlot(http, function(slots) {
				console
				self.slots = slots;
				slots.forEach(function(s) {
					let time = s.name.slice(1, s.name.length +1)
					switch (convertSlot(time).day) {
						case 1:
							s.day = 'Mon'
							break;
						case 2:
							s.day = 'Tues'
							break;
						case 3:
							s.day = 'Wed'
							break;
						case 4:
							s.day = 'Thurs'
							break;
						case 5:
							s.day = 'Fri'
							break;
						default:
							break;
					};
					s.period = convertSlot(time).period;
				});
				self.data = angular.copy(slots);

				api.listLecturerSlot(http, function(ls) {
					self.ls = ls;
					self.data.forEach(function(d) {
						d.children = ls.filter(item => item.idSlot == d.idSlot);
					});
				});
			});
		});
	};
	initApi(this.$http);
	
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

	self.toggleValue = function(idLecturer, idSlot, value) {
		value = !value;
		let request = {
			idLecturer : idLecturer,
			idSlot : idSlot,
			value : value
		}
		api.editLSValue(self.$http, request, function(res) {
			if(res) initApi(self.$http);
		});
	};
};

module.exports = lecturerSlot;
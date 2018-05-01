let lecturerClass = 'lecturerClass';
let api = require('../api');

angular.module(lecturerClass, []).component(lecturerClass, {
	template : require('html-loader!./lecturer-class.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;
	this.$http = $http;
	function initApi(http) {
		api.listLecturer(http, function(lecturers) {
			self.lecturers = lecturers;
			api.listClass(http, function(classes) {
				self.classes = classes;
				self.data = angular.copy(classes);
				api.listLecturerClass(http, function(lc) {
					self.lc = lc;
					self.data.forEach(function(d) {
						d.children = lc.filter(item => item.idClass == d.idClass);
						console.log("//", self.data);
					});
				});
			});
		});
	};
	initApi(this.$http);
	self.toggleValue = function(idLecturer, idClass, value) {
		value = !value;
		let request = {
			idLecturer : idLecturer,
			idClass : idClass,
			value : value
		}
		api.editLCValue(self.$http, request, function(res) {
			if(res) initApi(self.$http);
		});
	};
};

module.exports = lecturerClass;
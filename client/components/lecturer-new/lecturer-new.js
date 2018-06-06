let lecturerNew = 'lecturerNew';
let api = require('../api');

angular.module(lecturerNew, []).component(lecturerNew, {
	template : require('html-loader!./lecturer-new.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;

	this.lect = {
		idLecturer: null,
		name: null
	};
	this.message = null;
	this.viewLecturerList = function() {
		$scope.$parent.view('lecturerList');
	};
	this.addNewLecturer = function () {
		if(!self.lect.name) {
			self.message = "Please enter lecturer name!"
			return;
		}
		api.newLecturer($http, self.lect, function(res) {
			if(res) {
				self.lect = {};
				self.message = "Add new lecturer successfull!"
			};
		});
	};
};

module.exports = lecturerNew;
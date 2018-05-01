'use strict';

let moduleName = 'lecturerList';
let api = require('../api');

angular.module(moduleName, []).component(moduleName, {
	template : require('html-loader!./lecturer-list.html'),
	controller : controller,
	controllerAs : 'self'
});
function controller ($scope, $http, $timeout) {
	let self = this;
	this.message = null;
	this.onEdit = false;
	api.listLecturer($http, function(res) {
		self.lecturers = res;
	});
	
	this.viewLecturerNew = function() {
		$scope.$parent.view('lecturerNew');
	};

	this.onButtonEdit = function(l) {
		console.log(l, self.onEdit);
		self.onEdit = true;
		self.lect = angular.copy(l);
	}
	this.editLecturer = function(l) {
		api.editLecturer($http, l, function(res) {
			if(res) {
				api.listLecturer($http, function(res) {
					self.lecturers = res;
				});
				self.message = "Edit Lecturer successfull!";
				self.onEdit = false;
			}
		});
	}
	this.deleteLecturer = function(l) {
		if(!l.idLecturer) return;
		let request = {
			idLecturer: l.idLecturer
		}
		api.deleteLecturer($http, request, function(res) {
			if(res) {
				api.listLecturer($http, function(res) {
					self.lecturers = res;
				});
				self.message = "Delete Lecturer successfull!";
			}
		});
	}
}
module.exports = moduleName;
let lecturerNew = 'lecturerNew';

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
		if(!self.lect.name) return;
		$http({
			method: 'POST',
			url: '/lecturer/new', 
			data: self.lect
		}).then(function(res) {
			console.log(res);
			self.lect = {};
			self.message = "Add new lecturer successfull!"
		}, function(err){
			console.error(err);
		});
	}
}

module.exports = lecturerNew;
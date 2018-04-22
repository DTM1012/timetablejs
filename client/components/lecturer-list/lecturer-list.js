let moduleName = 'lecturerList';

angular.module(moduleName, []).component(moduleName, {
	template : require('html-loader!./lecturer-list.html'),
	controller : controller,
	controllerAs : 'self'
});

function controller ($scope, $http, $timeout) {
	let self = this;
	this.message = null;
	this.onEdit = false;
	console.log('onEdit', this.onEdit);
	function listLecturer() {
		$http({
			method: 'POST',
			url: '/lecturer/list'
		}).then(function(res) {
			console.log(res);
			self.lecturers = res.data.data;

		}).catch(function(error) {
			console.log(error);
		});
	}
	listLecturer();
	this.viewLecturerNew = function() {
		console.log($scope.$parent);
		$scope.$parent.view('lecturerNew');
	};
	this.onButtonEdit = function(l) {
		console.log(l, self.onEdit);
		self.onEdit = true;
		self.lect = angular.copy(l);
	}
	this.editLecturer = function(l) {
		console.log("edit", l);
		$http({
			method: 'POST',
			url: '/lecturer/edit',
			headers: {
		        'Content-type': 'application/json;charset=utf-8'
		    },
			data: l
		}).then(function(res) {
			console.log(res);
			listLecturer();
			self.message = "Edit Lecturer successfull!";
			self.onEdit = false;

		}).catch(function(error) {
			console.log(error);
		});
	}
	this.deleteLecturer = function(l) {
		if(!l.idLecturer) return;
		let request = {
			idLecturer: l.idLecturer
		}
		$http({
			method: 'DELETE',
			url: '/lecturer/delete',
			headers: {
		        'Content-type': 'application/json;charset=utf-8'
		    },
			data: request
		}).then(function(res) {
			console.log(res);
			listLecturer();
			self.message = "Delete Lecturer successfull!";

		}).catch(function(error) {
			console.log(error);
		});
	}
}
module.exports = moduleName;
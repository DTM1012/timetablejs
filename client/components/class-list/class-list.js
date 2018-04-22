let moduleName = 'classList';

angular.module(moduleName, []).component(moduleName, {
	template : require('html-loader!./class-list.html'),
	controller : controller,
	controllerAs : 'self'
});

function controller ($scope, $http, $timeout) {
	let self = this;
	this.message = null;
	this.onEdit = false;
	console.log('onEdit', this.onEdit);
	function listClass() {
		$http({
			method: 'POST',
			url: '/class/list'
		}).then(function(res) {
			console.log(res);
			self.classes = res.data.data;

		}).catch(function(error) {
			console.log(error);
		});
	}
	listClass();
	this.viewClassNew = function() {
		console.log($scope.$parent);
		$scope.$parent.view('classNew');
	};
	this.onButtonEdit = function(c) {
		console.log(c, self.onEdit);
		self.onEdit = true;
		self.class = angular.copy(c);
	}
	this.editClass = function(c) {
		console.log("edit", c);
		$http({
			method: 'POST',
			url: '/class/edit',
			headers: {
		        'Content-type': 'application/json;charset=utf-8'
		    },
			data: c
		}).then(function(res) {
			console.log(res);
			listClass();
			self.message = "Edit Class successfull!";
			self.onEdit = false;

		}).catch(function(error) {
			console.log(error);
		});
	}
	this.deleteClass = function(c) {
		if(!c.idClass) return;
		let request = {
			idClass: c.idClass
		}
		$http({
			method: 'DELETE',
			url: '/class/delete',
			headers: {
		        'Content-type': 'application/json;charset=utf-8'
		    },
			data: request
		}).then(function(res) {
			console.log(res);
			listClass();
			self.message = "Delete Class successfull!";

		}).catch(function(error) {
			console.log(error);
		});
	}
}
module.exports = moduleName;
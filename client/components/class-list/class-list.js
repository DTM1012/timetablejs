let moduleName = 'classList';
let api = require('../api');
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
	api.listClass($http, function(res) {
		if(res) self.classes = res;
	});
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
		api.editClass($http, c, function(res){
			if(res) {
				api.listClass($http, function(res) {
					if(res) self.classes = res;
				});
				self.message = "Edit Class successfull!";
				self.onEdit = false;
			}
		});
	};
	this.deleteClass = function(c) {
		if(!c.idClass) return;
		let request = {
			idClass: c.idClass
		}
		api.deleteClass($http, request, function(res) {
			if(res) {
				api.listClass($http, function(res) {
					if(res) self.classes = res;
				});
				self.message = "Delete Class successfull!";
			}
		});
	}
}
module.exports = moduleName;
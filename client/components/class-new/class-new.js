let classNew = 'classNew';
let api = require('../api');

angular.module(classNew, []).component(classNew, {
	template : require('html-loader!./class-new.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;

	this.class = {
		idClass: null,
		name: null,
		credit: null,
		demand: null
	};
	this.message = null;
	this.viewClassList = function() {
		$scope.$parent.view('classList');
	};
	this.addNewClass = function () {
		if(!self.class.name) return;
		api.newClass($http, self.class, function(res) {
			if(res) {
				self.class = {};
				self.message = "Add new class successfull!"
			};
		});
	}
}

module.exports = classNew;
let moduleName = 'roomList';
let api = require('../api');
angular.module(moduleName, []).component(moduleName, {
	template : require('html-loader!./room-list.html'),
	controller : controller,
	controllerAs : 'self'
});

function controller ($scope, $http, $timeout) {
	let self = this;
	this.message = null;
	this.onEdit = false;
	api.listRoom($http, function(res) {
		if(res) self.rooms = res;
	});
	this.viewRoomNew = function() {
		console.log($scope.$parent);
		$scope.$parent.view('roomNew');
	};
	this.onButtonEdit = function(r) {
		console.log(r, self.onEdit);
		self.onEdit = true;
		self.room = angular.copy(r);
	}
	this.editRoom = function(r) {
		api.editRoom($http, r, function(res) {
			if(res) {
				api.listRoom($http, function(res) {
					if(res) self.rooms = res;
				});
				self.message = "Edit Room successfull!";
				self.onEdit = false;
			};
		});
	}
	this.deleteRoom = function(r) {
		if(!r.idRoom) return;
		let request = {
			idRoom: r.idRoom
		};
		api.deleteRoom($http, request, function(res) {
			if(res) {
				api.listRoom($http, function(res) {
					if(res) self.rooms = res;
				});
				self.message = "Delete Room successfull!";
			}
		});
	}
}
module.exports = moduleName;
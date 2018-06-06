let roomNew = 'roomNew';
let api = require('../api');

angular.module(roomNew, []).component(roomNew, {
	template : require('html-loader!./room-new.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;

	this.room = {
		idRoom: null,
		name: null,
		capacity: null
	};
	this.message = null;
	this.viewRoomList = function() {
		$scope.$parent.view('roomList');
	};
	this.addNewRoom = function () {
		if(!self.room.name || !self.room.capacity) {
			self.message = "Please check input!";
			return;
		}
		api.newRoom($http, self.room, function(res) {
			if(res) {
				self.room = {};
				self.message = "Add new room successfull!"
			};
		});
	}
}

module.exports = roomNew;
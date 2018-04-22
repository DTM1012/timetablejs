let roomNew = 'roomNew';

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
		if(!self.room.name) return;
		$http({
			method: 'POST',
			url: '/room/new', 
			data: self.room
		}).then(function(res) {
			console.log(res);
			self.room = {};
			self.message = "Add new room successfull!"
		}, function(err){
			console.error(err);
		});
	}
}

module.exports = roomNew;
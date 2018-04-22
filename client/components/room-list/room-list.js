let moduleName = 'roomList';

angular.module(moduleName, []).component(moduleName, {
	template : require('html-loader!./room-list.html'),
	controller : controller,
	controllerAs : 'self'
});

function controller ($scope, $http, $timeout) {
	let self = this;
	this.message = null;
	this.onEdit = false;
	console.log('onEdit', this.onEdit);
	function listRoom() {
		$http({
			method: 'POST',
			url: '/room/list'
		}).then(function(res) {
			console.log(res);
			self.rooms = res.data.data;

		}).catch(function(error) {
			console.log(error);
		});
	}
	listRoom();
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
		console.log("edit", r);
		$http({
			method: 'POST',
			url: '/room/edit',
			headers: {
		        'Content-type': 'application/json;charset=utf-8'
		    },
			data: r
		}).then(function(res) {
			console.log(res);
			listRoom();
			self.message = "Edit Room successfull!";
			self.onEdit = false;

		}).catch(function(error) {
			console.log(error);
		});
	}
	this.deleteRoom = function(r) {
		if(!r.idRoom) return;
		let request = {
			idRoom: r.idRoom
		}
		$http({
			method: 'DELETE',
			url: '/room/delete',
			headers: {
		        'Content-type': 'application/json;charset=utf-8'
		    },
			data: request
		}).then(function(res) {
			console.log(res);
			listRoom();
			self.message = "Delete Room successfull!";

		}).catch(function(error) {
			console.log(error);
		});
	}
}
module.exports = moduleName;
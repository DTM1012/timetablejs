let roomClass = 'roomClass';
let api = require('../api');

angular.module(roomClass, []).component(roomClass, {
	template : require('html-loader!./room-class.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;
	this.$http = $http;
	function initApi(http) {
		api.listRoom(http, function(rooms) {
			self.rooms = rooms;
			api.listClass(http, function(classes) {
				self.classes = classes;
				self.data = angular.copy(classes);
				api.listRoomClass(http, function(rc) {
					self.rc = rc;
					self.data.forEach(function(d) {
						d.children = rc.filter(item => item.idClass == d.idClass);
						console.log("//", self.data);
					});
				});
			});
		});
	};
	initApi(this.$http);
	self.toggleValue = function(idRoom, idClass, value) {
		value = !value;
		let request = {
			idRoom : idRoom,
			idClass : idClass,
			value : value
		}
		api.editRCValue(self.$http, request, function(res) {
			if(res) initApi(self.$http);
		});
	};
};

module.exports = roomClass;
console.log("Hello world");
var lecturerNew = require('../../components/lecturer-new/lecturer-new.js');
var lecturerList = require('../../components/lecturer-list/lecturer-list.js');

var classNew = require('../../components/class-new/class-new.js');
var classList = require('../../components/class-list/class-list.js');

var roomNew = require('../../components/room-new/room-new.js');
var roomList = require('../../components/room-list/room-list.js');

var timetable = require('../../components/timetable/timetable.js');
var app = angular.module('app', [lecturerNew, lecturerList, classNew, classList, roomNew, roomList, timetable]);
app.controller('appCtrl', function($scope) {
	$scope.view = function(viewName) {
		function setNotView () {
			$scope.lecturerNew = false;
			$scope.lecturerList = false;
			$scope.classNew = false;
			$scope.classList = false;
			$scope.roomNew = false;
			$scope.roomList = false;
		}
		switch (viewName) {
			case 'lecturerNew':
				setNotView();
				$scope.lecturerNew = true;
				break;
			case 'lecturerList':
				setNotView();
				$scope.lecturerList = true;
				break;
			case 'classNew':
				setNotView();
				$scope.classNew = true;
				break;
			case 'classList':
				setNotView();
				$scope.classList = true;
				break;
			case 'roomNew':
				setNotView();
				$scope.roomNew = true;
				break;
			case 'roomList':
				setNotView();
				$scope.roomList = true;
				break;
			default:
				setNotView();
				break;
		}
	}
});
var lecturerNew = require('../../components/lecturer-new/lecturer-new.js');
var lecturerList = require('../../components/lecturer-list/lecturer-list.js');

var classNew = require('../../components/class-new/class-new.js');
var classList = require('../../components/class-list/class-list.js');

var roomNew = require('../../components/room-new/room-new.js');
var roomList = require('../../components/room-list/room-list.js');

var lecturerClass = require('../../components/lecturer-class/lecturer-class.js');
var lecturerSlot = require('../../components/lecturer-slot/lecturer-slot.js');
var roomClass = require('../../components/room-class/room-class.js');

var api = require('../../components/api');
var timetable = require('../../components/timetable/timetable.js');
var app = angular.module('app', [lecturerNew, lecturerList, classNew, classList, roomNew, roomList, timetable, lecturerClass, lecturerSlot, roomClass]);
app.controller('appCtrl', function($scope, $http) {
	function setNotView () {
		$scope.lecturerNew = false;
		$scope.lecturerList = false;
		$scope.classNew = false;
		$scope.classList = false;
		$scope.roomNew = false;
		$scope.roomList = false;
		$scope.timetable = false;
		$scope.lecturerClass = false;
		$scope.lecturerSlot = false;
		$scope.roomClass = false;
		$scope.spinner = false;
	}
	$scope.view = function(viewName) {
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
			case 'timetable':
				setNotView();
				$scope.timetable = true;
				break;
			case 'lecturerClass':
				setNotView();
				$scope.lecturerClass = true;
				break;
			case 'lecturerSlot':
				setNotView();
				$scope.lecturerSlot = true;
				break;
			case 'roomClass':
				setNotView();
				$scope.roomClass = true;
				break;
			default:
				setNotView();
				break;
		}
		
	}
	$scope.generate = function () {
		console.log("on");
		$scope.spinner = true;
		api.generate($http, function(res) {
			if(res.code == 200) {
				setNotView();
				$scope.spinner = false;
				$scope.timetable = true;
			}
		});
	};
});
let timetable = 'timetable';

angular.module(timetable, []).component(timetable, {
	template : require('html-loader!./timetable.html'),
	controller : Controller,
	controllerAs : 'self'
		
});
function Controller ($scope, $http) {
	let self = this;
	this.data = [
		{
			lecturer: "LECT001",
			room: "R001",
			class: "INT001",
			slot: "S7"
		},{
			lecturer: "LECT001",
			room: "R001",
			class: "INT001",
			slot: "S25"
		},{
			lecturer: "LECT002",
			room: "R004",
			class: "INT006",
			slot: "S5"
		},{
			lecturer: "LECT002",
			room: "R002",
			class: "INT003",
			slot: "S1"
		}
	];
	// this.selectedLecturer = this.data[0];
	this.tab = 1;

    this.setTab = function (tabId) {
        this.tab = tabId;
    };

    this.isSet = function (tabId) {
        return this.tab === tabId;
    };

    
	function convertSlot (slot) {
		let day = null;
		let period = null;
		if(slot % 5 == 0) {
			day = slot / 5;
			period = 5;
		} else {
			day = Math.floor(slot / 5) + 1;
			period = slot % 5;
		};
		return {day: day, period: period};
	};
	this.data.forEach(function(d) {
		d.day = convertSlot(d.slot.slice(1, d.slot.length +1)).day;
		d.period = convertSlot(d.slot.slice(1, d.slot.length +1)).period;
	});
	/*function listClass() {
		let promise = new Promise(function(resolve, reject) {
			$http({
				method: 'POST',
				url: '/class/list'
			}).then(function(res) {
				console.log(res);
				self.classes = res.data.data;
				resolve();
			}).catch(function(error) {
				console.log(error);
				reject();
			});
		})
		return promise;
	};
	listClass()
	.then(function() {
		self.classes.forEach(function(c) {
			c.children = self.data.filter(d => d.class == c.name);
		});
		console.log("classes", self.classes);
	})
	.catch(function() {
		console.log("fail");
	});
	*/
	$http({
		method: 'POST',
		url: '/class/list'
	}).then(function(res) {
		console.log(res);
		self.classes = res.data.data;
		self.classes.forEach(function(c) {
			c.children = self.data.filter(d => d.class == c.name);
		});
	}).catch(function(error) {
		console.log(error);
	});
}

module.exports = timetable;
const sum = function (x, y) {
	return x + y;
}

const makeDog = function (obj) {
	obj.hasTail = true;
	obj.wag = function () {
		this.isBarking = true;
	}
}

const robot = {
	name: 'Charles',
	operational: true,
	shutdown: function () {
		this.operational = false;
	},
	selfdestruct: function (inSeconds) {
		setTimeout(function () {
			this.operational = false;
			this.broken = true;
		}, inSeconds * 1000)
	}
}

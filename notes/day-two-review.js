// Review for Day 2 of Intermediate JS

// 1. Review Delegation (Given a list of LIs, where do I put the handler?)
// 2. Write a Class definition as a group
// 3. Understand Context (below)

const sum = function (x, y) {
	return x + y;
}
sum(1,2); // what is the "context"?

const makeDog = function (obj) {
	obj.hasTail = true;
	obj.wag = function () {
		this.isBarking = true;
	}
}

const cat = {name: 'Felix'};
makeDog(cat); // what is the context?
cat.wag(); // what is the context?

const robot = {
	name: 'Charles',
	operational: true,
	shutdown: function () {
		this.operational = false;
	},
	selfdestruct: function (inSeconds) {
		// will this setTimeout correctly set the properties on the robot?
		setTimeout(function () {
			this.operational = false;
			this.broken = true;
		}, inSeconds * 1000)
	}
}

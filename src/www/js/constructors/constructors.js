/*
 * Exercise: Constructor Functions
 *
 * 1. Create a constructor function named `Calculator'.  It should
 *    accept a single argument, an initial value for the calculator.
 *
 *    If the caller doesn't provide an initial value, set it to zero.
 *
 * 2. A calculator should support a stack (i.e. an array of numbers)
 *    that starts out empty.
 *
 * 3. Create a prototype function called `push' that pushes a number
 *    onto the calculator's stack.
 *
 * 4. Create the following prototype functions:
 *
 *   add: Sums the stack then adds the sum to the calculator's value -- then empties the stack
 *   mul: Sums the stack then multiplies the sum by the calculator's value -- then empties the stack
 *   get: Returns the value of the current calculator value
 *
 * BONUS -- Convert it to use the class keyword
 *
 * Example usage:
 *
 *   let c = new Calculator(5);
 *   c.push(5);   // Add 5 to the stack.
 *   c.push(10);  // Add 10 to the stack.
 *   c.add();     // Sum stack and add to 5,
 *                // Stack is now empty.
 *   c.get();     // returns 20
 */

function Calculator(value = 0) {
  this.stack = [];
  this.value = value;
}

Calculator.prototype.push = function(value) {
  this.stack.push(value);
};

Calculator.prototype.add = function() {
  this.value += this.stack.reduce((total, current) => {
    return total + current;
  }, 0);

  // empties the stack!
  this.stack = [];

  return this.value;
};

Calculator.prototype.mul = function() {
  this.value *= this.stack.reduce((total, current) => {
    return total + current;
  }, 0);

  // empties the stack!
  this.stack = [];

  return this.value;
};

Calculator.prototype.get = function() {
  return this.value;
};

// converted to a class...

// class Calculator {
// 	constructor(value = 0) {
// 		this.value = value;
// 		this.stack = [];
// 	}

// 	push(value) {
// 		this.stack.push(value);
// 	}

// 	add() {
// 		this.value += this.stack.reduce((total, current) => {
// 			return total + current;
// 		}, 0);

// 		// empties the stack!
// 		this.stack = [];

// 		return this.value;
// 	}

// 	mul() {
// 		this.value *= this.stack.reduce((total, current) => {
// 			return total + current;
// 		}, 0);

// 		// empties the stack!
// 		this.stack = [];

// 		return this.value;
// 	}

// 	get() {
// 		return this.value;
// 	}
// }

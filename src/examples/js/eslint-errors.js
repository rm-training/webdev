/**
 * This block of code will not work...
 * It has a number of scoping and hoisting issues
 *
 * Clean up the scope and hoisting issues:
 * - using "var", "let" or "const"
 * - reorganize code as needed
 *
 * Bonus:
 * Re-organize and write the code so that it executes in full
 * without polluting the global scope
 */


numbers = [4, 2, 3, 1];

total = sumArray(numbers);

// return the sum of an array of numbers
sumArray = function (arr) {
	total = 0;
	for (i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	return total;
}

secondTotal = sumArray(secondNumbers);

// testing the results
console.log('Original Array:', numbers);
console.log('First Total:', total);
console.log('Second Array:', secondNumbers);
console.log('Second Total:', secondTotal);

var secondNumbers = [5, 5, 5];
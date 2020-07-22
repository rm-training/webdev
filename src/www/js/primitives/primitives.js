/******************************************************************************/
/* EXERCISE 1: Example exercise.  The function below is an example
               exercise to demonstrate how the rest of the exercises
               work.

   Calculate the sum of 1 and 2 then return the answer.
*/
function exercise1() {
  return 1 + 2;
}

/**
 * EXERCISE 2: Create (and return) a string with at least 5 characters
 */
function exercise2() {
  return "hello";
}

/******************************************************************************/
// EXERCISE 3: Create (and return) an array that has at least 3 elements
function exercise3() {
  return [1, 2, 3, 4];
}

/**
 * EXERCISE 4: return the value of the string with "**" on either side
 */
function exercise4(str) {
  return "**" + str + "**";
}

/**
 * EXERCISE 5: create a return a function that adds 10 to the given `value` argument and returns it
 *
 * BONUS: Handle when no value is given, ie: exercise5();
 */
function exercise5(value) {
  if (!value) {
    value = 0;
  }
  return function () {
    return value + 10;
  }
}

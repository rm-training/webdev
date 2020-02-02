/*
 * Exercise: Exceptions
 *
 * 1. Create an exception named `OddNumberError'.  This exception
 *    should support the same prototype functions as the Error
 *    exception.
 *
 * 2. Write a function called `check'.  The check function should
 *    accept a single argument.
 *
 *    If the argument to the check function is even, return true.  If
 *    it is odd, throw an OddNumberError exception.
 */

class OddNumberError extends Error {
  constructor(message) {
    super(message);
    this.name = 'OddNumberError';
  }
}
//
// function OddNumberError(message) {
//   this.message = message;
// }
// OddNumberError.prototype = Object.create(Error.prototype);



function check(arg) {
  if (arg % 2 === 0) {
    return true;
  } else {
    throw new OddNumberError("Something bad happened");
  }
}

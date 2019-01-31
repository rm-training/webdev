/****************************************************************************/
// EXERCISE 1:
//
// The function below should return an object with two
// properties:
//
//   setTemp: A function that takes a single argument and sets the
//            current temperature to the value of the argument.
//
//            This function should *not* allow the temperature to go
//            above 100 or below 0.
//
//            Store the current temperature in a closure variable.
//
//   getTemp: A function that returns the last temperature set by
//            the setTemp function.
//
function closure() {

  let temps = [];

  return {
    setTemp(temp) {
      if (temp >= 0 && temp <= 100) {
        temps.push(temp);
      }
    },
    getTemp() {
      return temps[temps.length - 1];
    }
  }

}

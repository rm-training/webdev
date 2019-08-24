// to get this to work...
// curry should return a function
// with the arguments given as "bound arguments"
// the returned function can be called
Function.prototype.curry = function () {
  var originalFunction = this;
  return function (...curryArgs) {
    var currying = this;
    return function (...callerArgs) {
      return originalFunction.apply(currying, [].concat(curryArgs, callerArgs));
    }
  };
};

// or with bind...

Function.prototype.curry = function () {
  var originalFunction = this;
  return function (...curryArgs) {
    return originalFunction.bind(this, ...curryArgs);
  };
};

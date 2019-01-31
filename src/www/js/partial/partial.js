Function.prototype.curry = function () {
  const func = this;
  return function (...args) {
    return func.bind(this, ...args);
  }
};

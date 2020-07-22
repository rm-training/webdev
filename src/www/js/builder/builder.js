/*
 * The `Builder' function takes a single argument (an object) and
 * generates (and returns) a constructor function.
 *
 * The object given to the `Builder' function has one special
 * property, the `constructor' property.  It will be a function that
 * should become a fully working JavaScript constructor function.
 *
 * The remaining properties in the object should become prototype
 * properties for the returned constructor function.
 *
 * Tips & Warnings:
 *  - don't mutate the provided `properties` object
 *  - pay attention to "own" vs "all" properties of an object (use hasOwnProperty() or getOwnPropertyNames())
 *  - you'll be controlling "context" (with call, apply, bind, etc)
 *
 * BONUS: (if you have time)
 *
 * Change the `Builder' function so that it takes a second argument,
 * another constructor function.  If the second argument is given, the
 * constructor function that is generated should inherit from the
 * second argument's prototype property.  This allows one to easily
 * create a class that inherits from another class.
 */

function Builder(properties) {
  // caveat: we're referencing the original properties object here
  // but we may want to actually clone the original so as to not allow
  // future modifications to `properties` to affect the constructor here
  const constructor = function(...args) {
    properties.constructor.apply(this, args);
  };

  for (let prop in properties) {
    // all enumerables...
    if (properties.hasOwnProperty(prop) && prop !== "constructor") {
      constructor.prototype[prop] = properties[prop];
    }
  }

  return constructor;
}

// a bad example
// it mutates the original `properties` object
// function Builder(properties, parent) {
//   var ctor = properties.constructor;
//   delete properties.constructor;

//   // and it uses the poorly performing 'setPrototypeOf'
//   if (parent !== undefined) {
//     // properties.__proto__ = parent.prototype;
//     Object.setPrototypeOf(properties, parent.prototype);
//   }

//   ctor.prototype = properties;
//   return ctor;
// }

// ES2015+
// function Builder({constructor, ...props}) {
//     const newConstructor = function (...args) {
//         constructor.apply(this, args);
//     };
//     // @todo - still need to avoid copying "constructor"
//     newConstructor.prototype = {...props};
//     return newConstructor;
// }

// Bonus:
// function Builder(properties, parentConstructor) {
//     const newConstructor = function (...args) {
//         if (typeof constructor2 === 'function') {
//             parentConstructor.apply(this);
//         }
//         properties.constructor.apply(this, args);
//     };
//
//     if (typeof parentConstructor === 'function') {
//         newConstructor.prototype = Object.create(parentConstructor.prototype);
//     }
//
//     for (let propName in properties) {
//         if (properties.hasOwnProperty(prop) && propName !== 'constructor') {
//             newConstructor.prototype[propName] = properties[propName];
//         }
//     }
//
//     return newConstructor;
// }

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
 * BONUS: (if you have time)
 *
 * Change the `Builder' function so that it takes a second argument,
 * another constructor function.  If the second argument is given, the
 * constructor function that is generated should inherit from the
 * second argument's prototype property.  This allows one to easily
 * create a class that inherits from another class.
 */
// function Builder(properties) {
//
//     // making a new function to wrap the original (somewhat optional)
//     const newConstructor = function (...args) {
//         properties.constructor.apply(this, args);
//     };
//
//     // but this will overwrite the new ^ constructor :/
//     //newConstructor.prototype = properties;
//
//     for (let propName in properties) {
//        if (propName !== 'constructor') {
//             newConstructor.prototype[propName] = properties[propName];
//        }
//     }
//
//     return newConstructor;
// }


// ES2015+
// function Builder({constructor, ...props}) {
//     const newConstructor = function (...args) {
//         constructor.apply(this, args);
//     };
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
//         if (propName !== 'constructor') {
//             newConstructor.prototype[propName] = properties[propName];
//         }
//     }
//
//     return newConstructor;
// }
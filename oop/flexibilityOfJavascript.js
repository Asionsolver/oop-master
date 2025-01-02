// This approach is very simple, but it doesn’t allow you to create animation objects, which can store state and have methods that act only on this internal state.

/* Start and stop animations using functions. */
// function startAnimation() {
//   console.log("Animation started");
// }
// function stopAnimation() {
//   console.log("Animation stopped");
// }

/* Usage. */
// startAnimation();
// stopAnimation();

// Defines a class that lets you create such objects:

/* Anim class. */
// var Anim = function () {};
// Anim.prototype.start = function () {
//   console.log("Animation started");
// };
// Anim.prototype.stop = function () {
//   console.log("Animation stopped");
// };
/* Usage. */
// var myAnim = new Anim();
// myAnim.start();
// myAnim.stop();

/* Anim class, with a slightly different syntax for declaring methods. */
// var Anim = function () {};
// Anim.prototype = {
//   start: function () {
//     console.log("Animation started");
//   },
//   stop: function () {
//     console.log("Animation stopped");
//   },
// };

/* Add a method to the Function object that can be used to declare methods. */
// Function.prototype.method allows you to add new methods to classes.
// Function.prototype.method = function (name, fn) {
//   this.prototype[name] = fn;
// };
/* Anim class, with methods created using a convenience method. */
// var Anim = function () {};
// Anim.method("start", function () {
//   console.log("Animation started");
// });
// Anim.method("stop", function () {
//   console.log("Animation stopped");
// });

/* This version allows the calls to be chained. */
Function.prototype.method = function (name, fn) {
  this.prototype[name] = fn;
  return this;
};
/* Anim class, with methods created using a convenience method and chaining. */
var Anim = function () {};

Anim.method("start", function () {
  console.log("Animation started");
  return this;
}).method("stop", function () {
  console.log("Animation stopped");
});

/* Usage. */
var myAnim = new Anim();
myAnim.start().stop();

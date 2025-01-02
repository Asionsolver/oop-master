/**
@ WeakMap
What is WeakMap in JavaScript?
A WeakMap is a special kind of Map that allows you to associate keys (objects only) with values, but with some key differences:

Keys must be objects: Unlike Map, where keys can be of any type, WeakMap keys must be objects.
Weak references: WeakMap holds "weak" references to its keys, meaning that if no other part of your code is referencing the key object, it can be garbage collected.
Not iterable: You cannot iterate over a WeakMap (no forEach, keys, values, etc.).
Why Use WeakMap?
To store private or sensitive data tied to an object.
To avoid memory leaks because unused objects can be garbage collected.
*/

const weakMap = new WeakMap();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakMap.set(obj1, "foo");
weakMap.set(obj2, "bar");

console.log(weakMap.get(obj1)); // foo
console.log(weakMap.get(obj2)); // bar

// Remove the reference to the object
// obj2 = null;

// setTimeout(() => {
//   // The object should now be eligible for garbage collection
//   // The WeakMap entry should have been removed
//   console.log(weakMap.get(obj2)); // Output: undefined
// }, 1000);

// const privateData = new WeakMap();

// class User {
//   constructor(name, age) {
//     privateData.set(this, { name, age });
//   }

//   getName() {
//     return privateData.get(this).name;
//   }

//   setName(newName) {
//     privateData.get(this).name = newName;
//   }
// }

// const user = new User("Ashis", 25);

// console.log(user.getName()); // Ashis
// user.setName("Paul");
// console.log(user.getName()); // Paul

// console.log(privateData.get(user)); // Output: { name: 'Paul', age: 25 }

const User = (function () {
  const privateData = new WeakMap(); // Encapsulated in a closure

  return class {
    constructor(name, age) {
      privateData.set(this, { name, age });
    }

    getName() {
      return privateData.get(this).name;
    }

    getAge() {
      return privateData.get(this).age;
    }
  };
})();

const user = new User("Paul", 25);

// This will throw an error because privateData is not accessible here
console.log(privateData.get(user)); // Error: privateData is not defined

// Access through class methods
console.log(user.getName()); // Output: "Paul"
console.log(user.getAge()); // Output: 25

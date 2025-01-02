// ! Using ES2022 # (Private Fields)
class User {
  #name; // Private field
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }
}

const user = new User("Paul", 25);
console.log(user);

// Private fields cannot be accessed outside the class
// console.log(user.#name); // SyntaxError: Private field '#name' must be declared in an enclosing class

// Access through class methods
console.log(user.getName()); // Output: "Paul"
console.log(user.getAge()); // Output: 25

// ! Using ES6 WeakMap for true privacy

// const User2 = (function () {
//   const privateData = new WeakMap(); // Encapsulated in a closure

//   return class {
//     constructor(name, age) {
//       privateData.set(this, { name, age });
//     }

//     getName() {
//       return privateData.get(this).name;
//     }

//     getAge() {
//       return privateData.get(this).age;
//     }
//   };
// })();

// const user2 = new User2("Paul", 25);

// This will throw an error because privateData is not accessible here
// console.log(privateData.get(user2)); // Error: privateData is not defined

// Access through class methods
// console.log(user2.getName()); // Output: "Paul"
// console.log(user2.getAge());

// ! Using Closures for Encapsulation
// function Person(name, age) {
//   let _name = name; // Private variable
//   let _age = age;

//   this.getName = function () {
//     return _name;
//   };

//   this.setName = function (newName) {
//     _name = newName;
//   };
// }

// const person = new Person("Ashis", 25);
// console.log(person.getName()); // Ashis
// person.setName("Paul");
// console.log(person.getName()); // Paul
// console.log(person.name); // undefined

// ! Using Symbols for Semi-Private Properties

// const _name = Symbol("name");

// class Person2 {
//   constructor(name) {
//     this[_name] = name; // Symbol-keyed private property
//   }

//   getName() {
//     return this[_name];
//   }
// }

// const person2 = new Person2("Ashis");
// console.log(person2.getName()); // Ashis
// console.log(person2[_name]); // output: 'Ashis'

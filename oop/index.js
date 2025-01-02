const person = {};
person.name = "John";
person.age = 30;
console.log(person);

// class Person { }

// ! Create an instance of the Person class
// const person1 = new Person()

// person1.name = 'John'
// person1.age = 30
// console.log(person1)

// const person2 = new Person()
// person2.name = 'Jane'
// person2.age = 25
// console.log(person2)

// class Person {
//     name = 'John';
//     age = 30;
// }

// const person1 = new Person();
// const person2 = new Person();
// person2.name = 'Jane';
// person2.age = 25;
// console.log(person1);
// console.log(person2);

class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  getName() {
    return this._name;
  }

  setName(value) {
    this._name = value;
  }

  getAge() {
    return this._age;
  }

  setAge(value) {
    this._age = value;
  }

  printInfo() {
    console.log(`${this._name} is ${this._age} years old`);
  }
}

const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

console.log(person1.getName());
console.log(person1.getAge());
person1.printInfo();

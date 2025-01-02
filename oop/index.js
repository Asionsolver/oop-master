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
  constructor(name, age, email) {
    this._name = name;
    this._age = age;
    this._email = email;
  }

  // getName() {
  //   return this._name;
  // }

  // setName(value) {
  //   this._name = value;
  // }

  // getAge() {
  //   return this._age;
  // }

  // setAge(value) {
  //   this._age = value;
  // }

  // getEmail() {
  //   return this._email;
  // }

  // setEmail(value) {
  //   this._email = value;
  // }

  // sendEmail(msg) {
  //   console.log(`Email sent to ${this._email}`);
  //   console.log("Message:", this._sanitizeEmail(msg));
  // }

  // _sanitizeEmail(msg) {
  //   return msg.trim().toUpperCase();
  // }

  set name(value) {
    this._name = value;
  }

  get name() {
    return this._name;
  }

  set age(value) {
    this._age = value;
  }

  get age() {
    return this._age;
  }

  set email(value) {
    this._email = value;
  }

  get email() {
    return this._email;
  }

  printInfo() {
    console.log(
      `${this._name} is ${this._age} years old. Email: ${this._email}`
    );
  }

  static isValid(age) {
    return age >= 0 && age < 150;
  }

  static equals(person1, person2) {
    if (person1.name === person2.name && person1.email === person2.email)
      return true;
    return false;
  }
}

// const person1 = new Person("John", 30, "ashiskumar@gmail.com");
// const person2 = new Person("Jane", 25, "ashis@gmail.com");
// const person4 = new Person("Jane", 25, "ashis@gmail.com");

// console.log(person1.getName());
// console.log(person1.getAge());

// person1.setEmail("ashiskumer2874@gmail.com");
// console.log(person1.getEmail());

// person1.sendEmail("   Hello, how are you?      ");
// person1.printInfo();
// console.log(person1.email);
// person1.printInfo();

// const user = {
//   name: "Ankit",
//   age: 25,
//   email: "ankit@gmail.com",
// };

// let person3 = null;

// if (Person.isValid(user.age)) {
//   person3 = new Person(user.name, user.age, user.email);
//   person3.printInfo();
// }

// console.log(person3);

// console.log(Person.equals(person2, person4));

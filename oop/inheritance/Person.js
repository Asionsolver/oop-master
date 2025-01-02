class Person {
  #name;
  #age;
  #email;
  constructor(name, age, email) {
    this.#name = name;
    this.#age = age;
    this.#email = email;
  }

  set name(value) {
    this.#name = value;
  }

  get name() {
    return this.#name;
  }

  set age(value) {
    this.#age = value;
  }

  get age() {
    return this.#age;
  }

  set email(value) {
    this.#email = value;
  }

  get email() {
    return this.#email;
  }

  toJSON() {
    return {
      name: this.#name,
      age: this.#age,
      email: this.#email,
    };
  }
  printInfo() {
    console.log(
      `${this.#name} is ${this.#age} years old. Email: ${this.#email}`
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

module.exports = Person;

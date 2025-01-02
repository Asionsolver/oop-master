const Person = require("./Person");

class Teacher extends Person {
  #subject;
  #salary;
  constructor(subject, salary, name, age, email) {
    super(name, age, email);
    this.#subject = subject;
    this.#salary = salary;
  }

  get subjects() {
    return this.#subject;
  }

  get tuitionFee() {
    return this.#salary;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      subject: this.#subject,
      salary: this.#salary,
    };
  }

  printInfo() {
    super.printInfo();
    console.log(`Subject: ${this.#subject}`);
    console.log(`Salary: ${this.#salary}`);
  }
}

module.exports = Teacher;

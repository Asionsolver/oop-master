const Person = require("./Person");

class Student extends Person {
  #subjects;
  #tuitionFee;
  constructor(subjects, tuitionFee, name, age, email) {
    super(name, age, email);
    this.#subjects = subjects;
    this.#tuitionFee = tuitionFee;
  }

  get subjects() {
    return this.#subjects;
  }

  get tuitionFee() {
    return this.#tuitionFee;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      subjects: this.#subjects,
      tuitionFee: this.#tuitionFee,
    };
  }
  printInfo() {
    super.printInfo();
    console.log(`Subjects: ${this.#subjects.join(", ")}`);
    console.log(`Tuition Fee: ${this.#tuitionFee}`);
  }
}

module.exports = Student;

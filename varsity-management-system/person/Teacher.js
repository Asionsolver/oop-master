const Employee = require("./Employee");

class Teacher extends Employee {
  #subjects;
  constructor(id, name, subjects) {
    super(id, name);
    this.#subjects = subjects;
  }

  get subjects() {
    return this.#subjects;
  }

  set subjects(value) {
    this.#subjects = value;
  }

  addSubject(subject) {
    this.#subjects.push(subject);
  }

  toJSON() {
    return {
      ...super.toJSON(),
      subjects: this.#subjects,
    };
  }
}

module.exports = Teacher;

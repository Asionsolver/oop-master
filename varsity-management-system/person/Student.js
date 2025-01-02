const UniPerson = require("./UniPerson");
const crypto = require("crypto");
class Student extends UniPerson {
  #studentID;
  #guardian;
  #exams;
  #fees;
  constructor(id, name, studentID, guardian) {
    super(id, name);
    this.#studentID = studentID || crypto.randomUUID();
    this.#guardian = guardian;
    this.#exams = [];
    this.#fees = null;
  }

  get studentID() {
    return this.#studentID;
  }

  set studentID(value) {
    this.#studentID = value;
  }

  get guardian() {
    return this.#guardian;
  }

  get exams() {
    return this.#exams;
  }

  set exams(value) {
    this.#exams = value;
  }

  addExam(exam) {
    this.#exams.push(exam);
  }

  get fees() {
    return this.#fees;
  }

  set fees(value) {
    this.#fees = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      studentID: this.#studentID,
      guardian: this.#guardian,
    };
  }
}
module.exports = Student;

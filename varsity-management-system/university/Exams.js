class Exams {
  #id;
  #name;
  #passingMarks;
  #subject;
  constructor({ id, name, passingMarks, subject }) {
    this.#id = id;
    this.#name = name;
    this.#passingMarks = passingMarks || 33;
    this.#subject = subject;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get passingMarks() {
    return this.#passingMarks;
  }

  get subject() {
    return this.#subject;
  }

  set name(name) {
    this.#name = name;
  }

  set passingMarks(passingMarks) {
    this.#passingMarks = passingMarks;
  }

  set subject(subject) {
    this.#subject = subject;
  }

  addSubject(subject) {
    this.#subject.push(subject);
  }

  removeSubject(subject) {
    this.#subject = this.#subject.filter((s) => s.id !== subject.id);
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      passingMarks: this.#passingMarks,
      subject: this.#subject,
    };
  }
}

module.exports = Exams;

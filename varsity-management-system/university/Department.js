const Subject = require("./Subject");

class Department {
  #id;
  #name;
  #subjects;
  #dean;
  #teachers;

  constructor({ id, name, subjects, dean, teachers }) {
    this.#id = id;
    this.#name = name;
    this.#subjects = subjects || [];
    this.#dean = dean || null;
    this.#teachers = teachers || [];
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get subjects() {
    return this.#subjects;
  }

  get dean() {
    return this.#dean;
  }

  get teachers() {
    return this.#teachers;
  }

  set name(name) {
    this.#name = name;
  }

  set subjects(subjects) {
    this.#subjects = subjects;
  }

  set dean(dean) {
    this.#dean = dean;
  }

  set teachers(teachers) {
    this.#teachers = teachers;
  }

  addSubject(subject) {
    this.#subjects.push(subject);
  }

  removeSubject(subject) {
    this.#subjects = this.#subjects.filter((s) => s.id !== subject.id);
  }

  addTeacher(teacher) {
    this.#teachers.push(teacher);
  }

  removeTeacher(teacher) {
    this.#teachers = this.#teachers.filter((t) => t.id !== teacher.id);
  }

  assignDean(dean) {
    this.#dean = dean;
  }

  removeDean() {
    this.#dean = null;
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      subjects: this.subjects.map((subject) => subject.toJSON()),
      dean: this.#dean,
      teachers: this.#teachers,
    };
  }
}

module.exports = Department;

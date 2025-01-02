const Person = require("./Person");

class UniPerson extends Person {
  #department;
  #account;
  constructor(id, name) {
    super(id, name);
    this.#department = null;
    this.#account = null;
  }

  get department() {
    return this.#department;
  }

  set department(value) {
    this.#department = value;
  }

  get account() {
    return this.#account;
  }

  set account(value) {
    this.#account = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
    };
  }
}

module.exports = UniPerson;

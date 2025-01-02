const Employee = require("./Employee");

class Stuff extends Employee {
  #title;
  constructor(id, name, title) {
    super(id, name);
    this.#title = title;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    this.#title = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      title: this.#title,
    };
  }
}

module.exports = Stuff;

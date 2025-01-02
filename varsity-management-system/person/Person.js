class Person {
  #id;
  #name;
  #bloodGroup;
  #contact;
  constructor(id, name) {
    this.#id = id;
    this.#name = name;
    this.#bloodGroup = null;
    this.#contact = null;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    this.#name = value;
  }

  get bloodGroup() {
    return this.#bloodGroup;
  }

  set bloodGroup(value) {
    this.#bloodGroup = value;
  }

  get contact() {
    return this.#contact;
  }

  set contact(value) {
    this.#contact = value;
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      bloodGroup: this.#bloodGroup,
    };
  }
}

module.exports = Person;

class Subject {
  #id;
  #name;
  #code;
  #credits;

  constructor({ id, name, code, credits }) {
    this.#id = id;
    this.#name = name;
    this.#code = code;
    this.#credits = credits;
  }

  get id() {
    return this.#id;
  }

  get name() {
    return this.#name;
  }

  get code() {
    return this.#code;
  }

  get credits() {
    return this.#credits;
  }

  set name(name) {
    this.#name = name;
  }

  set code(code) {
    this.#code = code;
  }

  set credits(credits) {
    this.#credits = credits;
  }

  toJSON() {
    return {
      id: this.#id,
      name: this.#name,
      code: this.#code,
      credits: this.#credits,
    };
  }
}

module.exports = Subject;

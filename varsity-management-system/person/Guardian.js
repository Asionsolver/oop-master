const Person = require("./Person");

class Guardian extends Person {
  #profession;
  #income;
  constructor(id, name, profession, income) {
    super(id, name);
    this.#profession = profession;
    this.#income = income;
  }

  get profession() {
    return this.#profession;
  }

  set profession(value) {
    this.#profession = value;
  }

  get income() {
    return this.#income;
  }

  set income(value) {
    this.#income = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      profession: this.#profession,
      income: this.#income,
    };
  }
}

module.exports = Guardian;

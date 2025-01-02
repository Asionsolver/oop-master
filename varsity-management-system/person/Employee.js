const UniPerson = require("./UniPerson");

class Employee extends UniPerson {
  #employeeID;
  #salary;
  constructor(id, name, employeeID, salary) {
    super(id, name);
    this.#employeeID = employeeID;
    this.#salary = salary;
  }

  get employeeID() {
    return this.#employeeID;
  }

  set employeeID(value) {
    this.#employeeID = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    this.#salary = value;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      employeeID: this.#employeeID,
      salary: this.#salary,
    };
  }
}

module.exports = Employee;

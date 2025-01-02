const crypto = require("crypto");

class Address {
  #id;
  #country;
  #street;
  #roadNo;
  #houseNo;
  #city;
  #postalCode;

  constructor({ id, country, street, roadNo, houseNo, city, postalCode }) {
    this.#id = id || crypto.randomUUID();
    this.#country = country;
    this.#street = street;
    this.#roadNo = roadNo || null;
    this.#houseNo = houseNo || null;
    this.#city = city;
    this.#postalCode = postalCode;
  }

  get id() {
    return this.#id;
  }

  get country() {
    return this.#country;
  }

  get street() {
    return this.#street;
  }

  get roadNo() {
    return this.#roadNo;
  }

  get houseNo() {
    return this.#houseNo;
  }

  get city() {
    return this.#city;
  }

  get postalCode() {
    return this.#postalCode;
  }

  set country(country) {
    this.#country = country;
  }

  set street(street) {
    this.#street = street;
  }

  set roadNo(roadNo) {
    this.#roadNo = roadNo;
  }

  set houseNo(houseNo) {
    this.#houseNo = houseNo;
  }

  set city(city) {
    this.#city = city;
  }

  set postalCode(postalCode) {
    this.#postalCode = postalCode;
  }

  toJSON() {
    return {
      id: this.#id,
      country: this.#country,
      street: this.#street,
      roadNo: this.#roadNo,
      houseNo: this.#houseNo,
      city: this.#city,
      postalCode: this.#postalCode,
    };
  }
}

module.exports = Address;

const crypto = require("crypto");

class Contact {
  #id;
  #email;
  #phone;
  #alternatePhone;
  #address;
  constructor({ id, email, phone, alternatePhone, address }) {
    this.#id = id || crypto.randomUUID();
    this.#email = email;
    this.#phone = phone;
    this.#alternatePhone = alternatePhone || null;
    this.#address = address || null;
  }

  get id() {
    return this.#id;
  }

  get email() {
    return this.#email;
  }

  get phone() {
    return this.#phone;
  }

  get alternatePhone() {
    return this.#alternatePhone;
  }

  get address() {
    return this.#address;
  }

  set email(email) {
    this.#email = email;
  }

  set phone(phone) {
    this.#phone = phone;
  }

  set alternatePhone(alternatePhone) {
    this.#alternatePhone = alternatePhone;
  }

  set address(address) {
    this.#address = address;
  }

  toJSON() {
    return {
      id: this.#id,
      email: this.#email,
      phone: this.#phone,
      alternatePhone: this.#alternatePhone,
      address: this.#address,
    };
  }
}

module.exports = Contact;

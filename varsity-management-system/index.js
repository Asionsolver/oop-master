const { Guardian, Student } = require("./person");
const { Contact, Address } = require("./contact");
const { Department, Subject } = require("./university/");

/**
 * @name guardian
 * @id 1
 */

const guardian = new Guardian(1, "Nitis Kumar", "Engineer", 50000);

guardian.bloodGroup = "A+";

guardian.contact = new Contact({
  email: "nitisKumar@gmail.com",
  phone: "01700000000",
});

guardian.contact.address = new Address({
  city: "Dhaka",
  country: "Bangladesh",
  postalCode: 1212,
  street: "Mirpur",
  roadNo: "10",
  houseNo: "10/A",
});

// console.log(guardian.contact.address.city);
// console.log(guardian.contact.address.country);
// console.log(guardian.contact.address.postalCode);
// console.log(guardian.contact.email);

/**
 * @name student
 * @id 1
 */

const student = new Student(1, "Ashis  Kumar", 201311049, guardian.name);
student.bloodGroup = "A-";
student.contact = new Contact({
  email: "ashiskumer@gmail.com",
  phone: "01710725954",
  alternatePhone: guardian.contact.phone,
  address: guardian.contact.address.toJSON(),
});

// console.log(student.toJSON());
// console.log(student.contact.toJSON());

/**
 * @name department
 * @id 1
 */

const department = new Department({
  id: 1,
  name: "CSE",
});
student.department = department;
department.addSubject(
  new Subject({ id: 1, name: "Math", code: 221, credits: 3 })
);
department.addSubject(
  new Subject({ id: 2, name: "Physics", code: 225, credits: 3 })
);
department.addSubject(
  new Subject({ id: 3, name: "Chemistry", code: 227, credits: 4 })
);

// department.addTeacher("Mr. X");
// department.addTeacher("Mr. Y");
// department.addTeacher("Mr. Z");

// department.assignDean("Mr. A");

console.log(student.department.toJSON());

const totalCredits = student.department.subjects.reduce(
  (total, subject) => total + subject.credits,
  0
);

console.log(totalCredits);

/**
 * @name Teacher
 * @id 1
 */



const Person = require("./Person");
const Student = require("./Student");
const Teacher = require("./Teacher");

const person = new Person("Ashis Kumar Paul", 25, "ashiskumer@gmail.com");

const student = new Student(
  ["Math", "Bangla", "ICT"],
  2000,
  "Ashis",
  25,
  "ashis@gmail.com"
);
const teacher = new Teacher("Math", 100000, "Asion", 30, "asion@gmail.com");

console.log(person.toJSON());
console.log(student.toJSON());
console.log(teacher.toJSON());

// console.log(teacher.name);
// console.log(teacher instanceof Person);
// console.log(teacher instanceof Teacher);

// console.log(student.name);
// console.log(student instanceof Person);
// console.log(student instanceof Student);
// student.printInfo();
// teacher.printInfo();

// const t =  (Person) teacher;
// const t = Object.assign(Object.create(Person.prototype), teacher);
// console.log(t instanceof Person); // true
// console.log(t instanceof Teacher); // false

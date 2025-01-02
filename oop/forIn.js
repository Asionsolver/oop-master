const person = { name: "Ashis", age: 25, profession: "Developer" };

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

const string = "Ashis";
const stringObj = { 0: "A", 1: "s", 2: "h", 3: "i", 4: "s", length: 5 };

for (const key in stringObj) {
  console.log(`${key}: ${stringObj[key]}`);
}

const parent = { inheritedProperty: "This is inherited" };
const child = Object.create(parent);
child.ownProperty = "This is own property";

for (const key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(`Own Property: ${key}`);
  } else {
    console.log(`Inherited Property: ${key}`);
  }
}

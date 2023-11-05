let Person = require("./person");


let person = new Person('Cristina', 'Oprisan', 1988, 160, 49, ['nadar', 'lees', 'pasear']);
console.log(person);
console.log(person.sureName);
console.log(person.firstName);
console.log(person.calculateAge());
console.log(person.calculateIMC());
console.log(person.printAll());
console.log(person.printHobbies());
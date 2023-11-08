const Contacts = require('./contacts');
const Person = require('./person');


let person1 = new Person('Cristina', 'Oprisan', 1988, 160, 49, ['nadar', 'lees', 'pasear']);
let person2 = new Person('Lucía', 'Nieto', 1992, 166, 60, ['ver peliculas', 'dormir', 'jugar tenis']);
let person3 = new Person('Leire', 'Candel', 1983, 170, 65, ['comer', 'escuchar musica', 'pasear']);

let contacts = new Contacts();
contacts.addPerson(person1);
contacts.addPerson(person2);
contacts.addPerson(person3);
contacts.printPersons();
console.log(contacts.persons);
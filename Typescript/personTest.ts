import { Person } from './person'

let person = new Person('Cristina', 35, 'Bilbao');
console.log(person.age);
person.printName();
person.setAdress('Madrid');
console.log(person.getAdress());
console.log(person.yearBirth(2023));
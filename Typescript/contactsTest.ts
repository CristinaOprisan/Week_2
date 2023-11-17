import { Person } from './person'
import { Contacts } from './contacts'

let person1 = new Person('Cristina', 35, 'Bilbao');
let person2 = new Person('Lucía', 30, 'Muskiz');

let contacts = new Contacts();
contacts.people.push(person1, person2)
console.log(contacts.people);
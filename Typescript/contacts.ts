import { Person } from './person'


// let person = new Person('Cristina', 35, 'Bilbao');

export class Contacts {

    public people: Person[];

    constructor() {
        this.people = [];
    }

    printCalendar() {
        this.people.forEach((person) => {
          console.log(`Name: ${person.sureName}, Age: ${person.age}, Address: ${person.getAdress()}`);
        });
    }
}
           

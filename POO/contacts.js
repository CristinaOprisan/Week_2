class Contacts {
    constructor() {
      this.persons = [];
    }
  
    addPerson(person) {
      this.persons.push(person);
    }
  
    printPersons() {
      this.persons.forEach((person, index) => {   
        console.log('Person: ');    
        for (let key in person) {
          console.log(`${key} - ${person[key]}`);
        }
      });
    }
  }
  
  module.exports = Contacts;
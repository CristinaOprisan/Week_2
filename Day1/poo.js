// Reto 1

// 1. Crea un repositorio de Git llamado “Week_2”. Haz una rama por día(4 días) llamadas
// “dia1”, “dia2” etc..
// 2. Para los retos de hoy trabajaremos desde la rama “dia1”.
// 3. Crea una carpeta llamada POO, donde guardaremos todos los retos de hoy.
// 4. Crea la clase Person de la manera más completa que se te ocurra. Su constructor debe
// tener como mínimo 2 parámetros de entrada.

// Reto 2
// Utilizando la clase Person definida en el punto anterior, haz que se pueda calcular el IMC
// (índice de mas corporal) de cualquier persona que se haya creado como un objeto de la
// clase.

// Reto 3

// Añadir el atributo yearOfBirth a la clase Person e implementar el método edad que tome
// como parámetro el año y calcule la edad de la persona.

// Reto 4

// Añadir un método que se denomine printAll que muestre por consola cada uno de los
// atributos de la clase Person seguido por “-” y el valor del atributo.

// Reto 5

// Añadir el atributo hobbies a la clase Person, que es un array de strings, y crear un método
// denominado printHobbies, que muestre por consola las aficiones de la persona.

// Reto 6

// • Guardar la clase Person en un fichero con extensión .js (person.js).
// • Modificar ese fichero para exportar la clase.
// • Importar la clase en otro fichero denominado personTest.js.
// • Crear un objeto de la clase Persona y probar todos sus atributos y métodos.
// • Sube todos los cambios a tu rama “dia1”.

// Reto 7

// • Crear una clase que se llame Contacts que tenga un atributo que sea un array de objetos
// de la clase Person. No olvides seguir trabajando desde tu rama ”dia1”.

// • El constructor de la clase Contacts no debe tener parámetros de entrada pero debe
// inicializar el array.

// • Crear un método llamado printPersons que imprima cada uno de los atributos de cada
// objeto Person.

// Reto 8

// • Guardar la clase Contacts en un fichero con extensión .js (contacts.js).

// • Modificar ese fichero para exportar la clase. Importar la clase en otro fichero denominado
// contactsTest.js.

// • Crear un objeto de la clase Contacts y probar todos sus atributos y métodos.

// • Sube todos los cambios a tu rama “dia1” y después haz ”merge” con tu rama
// “master/main”. En caso de tener conflicto soluciónalos.

// • Haz una versión de esta subida.


class Person {
    constructor (sureName, firstName, yearOfBirth, height, weight, hobbies){
        this.sureName = sureName;
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
        this.height = height;
        this.weight = weight;
        this.hobbies = hobbies
    }

    calculateIMC() {
        let imc = this.weight / (this.height * this.height);
        return imc;
    }

    calculateAge () {
        let actualYear = new Date().getFullYear()
        let age = actualYear - this.yearOfBirth
        return age
    }

    printAll () {
        console.log("Person attributes:");
         for (let key in this) {
            if (this.hasOwnProperty(key)) {
              console.log(`${key}- ${this[key]}`);
            }

        }
    }

    printHobbies () {
        this.hobbies = [this.hobbies]
        return this.hobbies
    }
}

let person1 = new Person('Cristina', 'Oprisan', 1988, 160, 49, ['nadar', 'lees', 'pasear']);
let person2 = new Person('Lucía', 'Nieto', 1992, 166, 60, ['ver peliculas', 'dormir', 'jugar tenis']);
let person3 = new Person('Leire', 'Candel', 1983, 170, 65, ['comer', 'escuchar musica', 'pasear']);

class Persons {
    constructor() {
        this.persons = []
    }

    upPerson(person) {
        this.persons.push(person)
    }

    showIMC() {
        for (let person of this.persons) {
            let imc = person.calculateIMC()
            console.log(`El indice corporal de la persona ${person.sureName} es: ${imc}.`);
        }
    }

    showAge() {
        for (let person of this.persons) {
            let age = person.calculateAge()
            console.log(`La edad de ${person.sureName} es de ${age} años.`);

        }
    }

    showDetail() {
         for (let person of this.persons) {
        let detail = person.printAll()
        console.log(detail);
    }
}

    showHobbies() {
        for (let person of this.persons) {
            let showHobbies = person.printHobbies()
            console.log(`Las aficiones de la persona ${person.sureName} son: ${showHobbies}`);
        }

    }
}


let persons = new Persons();
persons.upPerson(person1)
persons.upPerson(person2)
persons.upPerson(person3)
console.log(persons);

let imc = persons.showIMC()

let age = persons.showAge()

let detail = persons.showDetail()

let showHobbies = persons.showHobbies()


// Reto7

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
  
let contacts = new Contacts();
contacts.addPerson(person1);
contacts.addPerson(person2);
contacts.addPerson(person3);
contacts.printPersons();
  
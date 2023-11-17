// Reto 1: Clase Person
// 1. Para los retos de hoy trabajaremos, en el repositorio “Week_2”, creado ayer, desde la
// rama “dia2”. Se creará una nueva carpeta llamada “Typescript” y los ficheros .js se
// deben incorporar al .gitignore.

import { Book } from "./book";

// 1. Crear la Clase Person con la siguiente estructura:
// • Atributos Públicos:
// - name: string
// - age: number
// • Atributos Privados:
// - address: string
// • Constructor para todos los atributos
// • Metodos Públicos:
// - printName(). Imprime por consola el nombre
// - yearOfBirth(currentYear: number):number. Calcula y devuelve el año de nacimiento
// - setAddress(address:string). Modifica el atributo address con el valor pasado como parámetro.
// - getAddress():string. Devuelve el valor del atributo addess.


class Person {
    public sureName: string;
    public age: number;
    private adress: string;

    constructor(sureName: string, age: number, adress: string) {
        this.sureName = sureName;
        this.age = age;
        this.adress = adress;
    }

    public printName(){
         console.log(this.sureName);
    }

    public yearBirth(currentYear: number): number{
         return currentYear - this.age
         
    }

    public setAdress(adress: string){
        this.adress = adress
    }

    public getAdress(): string{
        return this.adress
        
    }

}



// Reto 2: Probar la Clase Person

// 1. Guardar la clase Person en un fichero con extensión .ts (person.ts).
// 1. Modificar ese fichero para exportar la clase.
// - export class Person
// 3. Importar la clase en otro fichero denominado personTest.ts.
// - import { Person } from "./person”
// 4. Crear un Objeto de la clase Person y probar todos sus atributos y métodos.



// Reto 3: Clase Contacts

// 1. Crear un fichero denominado contacts.ts.
// 2. Importar la clase Person.
// 3. Crear la clase contacts con la siguiente estructura:
// • Atributo Público:
// - people: array de objetos de la clase Person.
// • Constructor sin parámetros que inicialice el array people.
// • Métodos Públicos:
// - printCalendar(). Imprime por consola los datos de todas las personas de la agenda.
// 4. Probar la clase contacts en un fichero denominado contactsTest.ts


// Reto 4: Clase Book

// Crear la Clase Book con la siguiente estructura:

// • Atributos Privados:
// - title: string
// - nPages: number
// - isbn: string
// - author: string
// - editorial: string

// • Constructor para todos los atributos.
// • Metodos Públicos:

// - getters y setters para todos los atributos
// - toString (): string.
// Devuelve un string con TODA la información del libro con la siguiente estructura:

// “Title – Introducción a Javascript
// Numer of Pages - 233
// ISBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions"


// Reto 5: Probar la Clase Book

// 1. Guardar la clase Book en un fichero con extensión .ts (book.ts).
// 1. Modificar ese fichero para exportar la clase.
// - export class Book
// 3. Importar la clase en otro fichero denominado bookTest.ts.
// - import { Book } from "./book”
// 4. Crear un Objeto de la clase Book y probar todos sus atributos y métodos.



// Reto 6: Clase Library

// Crear la Clase Library con la siguiente estructura:
// • Atributos Privados:
// - books: array of Book
// - address: string
// - manager: string
// • Constructor para todos los atributos.
// • Metodos Públicos:
// - getters y setters para los atributos address y manager.
// - toString (): string.
// Devuelve un string con TODA la información de todos los libros de la biblioteca con la
// siguiente estructura :
// “Book1:
// Title – Introducción a Javascript
// Numer of Pages- 233
// IBN – 2344433-BC23333
// Author – Joseph Smith
// Editorial – Now Editions.......”
// - getNumberOfBooks ():number.
// Devuelve el numero de libros de la biblioteca.
// - findByAuthor (author:string):Book[].
// Devuelve los libros cuyo autor coincida con el nombre que se pasa como parámetro
// del método.


// Reto 7: Probar la Clase Library

// 1. Guardar la clase Library en un fichero con extensión .ts (library.ts).
// 1. Modificar ese fichero para exportar la clase.
// - export class Library
// 3. Importar la clase en otro fichero denominado libraryTest.ts.
// - import { Library } from "./library”
// 4. Crear un Objeto de la clase Library y probar todos sus atributos y métodos.
// 4. Sube todos los cambios a tu rama “dia2”.
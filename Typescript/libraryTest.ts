import { Book } from './book'
import { Library } from './library'

let book1 = new Book('The Silent Patient', 321, '978-84-20-43550-3', 'Alex Michaelides', 'Celadon Books');
let book2 = new Book('The Choice', 416, '978-84-08-18090-6', 'Edith Eger', 'Editorial Planeta');
let book3 = new Book('The Body in the Library', 208, '978-84-08-18090-6', 'Agatha Christie', 'Espasa Libros');

let library = new Library([book1, book2, book3], 'Bilbao', 'Juan')
console.log(library);
console.log(library.getNumberOfBooks());
console.log(library.findByAuthor('Edith Eger'));
library.setAddress('Sevilla')
console.log(library.getAddress());
library.setManager('Aithor')
console.log(library.getManager());
console.log(library.toString());



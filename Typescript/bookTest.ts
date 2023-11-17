import { Book } from './book'

let book = new Book('The Silent Patient', 321, '978-84-20-43550-3', 'Alex Michaelides', 'Celadon Books');

console.log(book.getTitle());
console.log(book.getNPages());
console.log(book.getIsbn());
console.log(book.getAuthor());
console.log(book.getEditorial());
book.setTitle('The Choice');
book.setNPages(416);
book.setIsbn('978-84-08-18090-6');
book.setAuthor('Edith Eger');
book.setEditorial('Editorial Planeta');
console.log(book.getTitle());
console.log(book.getNPages());
console.log(book.getIsbn());
console.log(book.getAuthor());
console.log(book.getEditorial());

console.log(book.toString());
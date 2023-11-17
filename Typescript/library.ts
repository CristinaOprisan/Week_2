import { Book } from './book'

export class Library {

    private books: Book[]
    private address: string
    private manager: string
    static books: any;
    static book: any;

    constructor(books: Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager
    }

    public getAddress(){
        return this.address
    }

    public getManager(){
        return this.manager
    }

    public setAddress(address: string): void {
        this.address = address
    }

    public setManager(manager: string): void {
        this.manager = manager
    }

    // public toString(): string {
    //     let libraryInfo = '';
    //     this.books.forEach((book, index) => {
    //       libraryInfo += `Book${index + 1}:\n${book.toString()}\n\n`;
    //     });

    //     return libraryInfo;
    // }

    // public toString(): string {
    //     let book = ''
    //     for (const book of Book[]) {
    //         return this.books.toString()
    //     }
    // }


    public getNumberOfBooks (): number {
        return this.books.length
    }

    public findByAuthor (author:string):Book[] {
        let authorLib = this.books.filter((book) => book.getAuthor() == author)
        return authorLib
    }
}


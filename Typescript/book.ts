export class Book {

    private title: string
    private nPages: number
    private isbn: string
    private author: string
    private editorial: string

    constructor(title: string, nPages: number, isbn: string, author: string, editorial: string) {
        this.title = title;
        this.nPages = nPages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }

    public getTitle(): string {
        return this.title
    }

    public getNPages(): number {
        return this.nPages
    }

    public getIsbn(): string {
        return this.isbn
    }

    public getAuthor(): string {
        return this.author
    }

    public getEditorial(): string {
        return this.editorial
    }

    public setTitle(title: string): void {
        this.title = title
    }

    public setNPages(nPages: number): void {
        this.nPages = nPages
    }

    public setIsbn(isbn: string): void {
        this.isbn = isbn
    }

    public setAuthor(author: string): void {
        this.author = author
    }

    public setEditorial(editorial: string): void {
        this.editorial = editorial
    }

    public toString(): string {
        return '"Title - ${this.title}\nNumer of Pages - ${this.nPages}\nISBN - ${this.isbn}\nAuthor - ${this.author}\nEditorial - ${this.editorial}"';
    }
}
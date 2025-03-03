//Task 1 - Creating Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails());

book1.updateCopies(-1);
console.log(book1.getDetails());


//Task 2 - Create Borrow Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks);


//Task 3 - Create Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}

class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
const library = new Library();
library.addBook(book1);
library.listBooks();


//Task 4 - Implemented Book Borrowing
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        
        if (book && borrower && book.copies > 0) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
const borrower1 = new Borrower("Alice Johnson", 201);
const library = new Library();
library.addBook(book1);
library.borrowers.push(borrower1);

library.lendBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);


//Task 5 - Implementing Book Returns
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }

    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }

    updateCopies(quantity) {
        this.copies += quantity;
    }
}

class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    }

    borrowBook(book) {
        this.borrowedBooks.push(book);
    }

    returnBook(book) {
        const index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1);
        }
    }
}

class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }

    addBook(book) {
        this.books.push(book);
    }

    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }

    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        
        if (book && borrower && book.copies > 0) {
            book.updateCopies(-1);
            borrower.borrowBook(book.title);
        }
    }

    returnBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(b => b.borrowerId === borrowerId);
        
        if (book && borrower) {
            book.updateCopies(1);
            borrower.returnBook(book.title);
        }
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 4);
const borrower1 = new Borrower("Alice Johnson", 201);
const library = new Library();
library.addBook(book1);
library.borrowers.push(borrower1);
library.lendBook(201, 123456);  // Sets up state from previous task

library.returnBook(201, 123456);
console.log(book1.getDetails());
console.log(borrower1.borrowedBooks);
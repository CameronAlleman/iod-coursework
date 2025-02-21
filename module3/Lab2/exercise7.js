const books = [ 
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }, 
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }, 
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 }, 
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 }, 
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 }, 
    ];

function getBookByTitle(bookId) {
    const book = books.find(book => book.id === bookId);
    return book ? book.title : null;
}

console.log(getBookByTitle(2));
console.log(getBookByTitle(8));


function getOldBooks() {
    return books.filter(book => book.year < 1950);
}

console.log(getOldBooks()); 

function addGenre() {
   return books.map(book => {
        return {...book,genre: 'classic'};
});
}


console.log(addGenre());

function getTitles(authorInitial) {
    const searchstring = ".";
    return books.filter(book => book.author.includes(searchstring));
}

function getTitles(authorInitial) {
    return books
        .filter(book => book.author.startsWith(authorInitial))
        .map(book => book.title);
    }

console.log(getTitles());


function latestBook() {
    let latest = books[0];
    books.forEach(book => {
        if (book.year > latest.year) {
            latest = book;
        }
    });
    return latest;
}

console.log(latestBook());

"use strict";

// Create Book class
class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue the book
    issueBook() {
        if (this.isIssued) {
            return false;
        }

        this.isIssued = true;
        return true;
    }

    // Return the book
    returnBook() {
        if (!this.isIssued) {
            return false;
        }

        this.isIssued = false;
        return true;
    }
}

// Create book objects
const books = [
    new Book("JavaScript Basics", "John Smith", "101"),
    new Book("Python Programming", "David Miller", "102"),
    new Book("Web Development", "Sarah Wilson", "103", true),
    new Book("Data Structures", "Robert Brown", "104")
];

// Display all available books
function displayAvailableBooks() {
    const bookList = document.getElementById("bookList");

    const availableBooks = books.filter(function(book) {
        return !book.isIssued;
    });

    bookList.innerHTML = "";

    if (availableBooks.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No books are currently available.";
        bookList.appendChild(li);
        return;
    }

    availableBooks.forEach(function(book) {
        const li = document.createElement("li");

        li.textContent =
            book.title + " by " + book.author +
            " (ISBN: " + book.ISBN + ")";

        bookList.appendChild(li);
    });
}

// Search and issue a book using ISBN
document.getElementById("issueBtn").addEventListener("click", function() {
    const isbn = document.getElementById("isbn").value.trim();
    const message = document.getElementById("message");

    const book = books.find(function(book) {
        return book.ISBN === isbn;
    });

    if (isbn === "") {
        message.textContent = "Please enter an ISBN.";
    } else if (!book) {
        message.textContent = "Book not found.";
    } else if (book.issueBook()) {
        message.textContent = book.title + " issued successfully!";
    } else {
        message.textContent = "This book is already issued.";
    }

    displayAvailableBooks();
});

// Show available books when the page loads
displayAvailableBooks();
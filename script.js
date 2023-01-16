let myLibrary = [];

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  alert(
    `This book name is ${this.title}, by ${this.author}, and it has ${this.pages} pages. And it's ${this.read} it`
  );
}

function addBookToLibrary() {}

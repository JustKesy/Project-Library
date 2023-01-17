const form = document.forms[0];
const shelves = document.querySelector(".shelves");
const myLibrary = [
  {
    title: "Lord Of the Rings",
    author: "Radoje Jezdic",
    pages: 800,
    read: true,
  },
  {
    title: "Lord Of the Rings 2",
    author: "Radoje Jezdic",
    pages: 850,
    read: true,
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); //sprecavanje ponovnog ucitavanja stranice

  const newBook = new Book(
    form.title.value,
    form.author.value,
    form.pages.value,
    form.read.checked
  );
  myLibrary.push(newBook);
  print();
  form.reset();
});

function newElement(book) {
  const el = document.createElement("div");
  el.classList.add("book-card");
  el.innerHTML = `<p>Book Name: ${book.title},</p><p>Written by: ${book.author},</p><p>Number of pages's: ${book.pages},</p><p>Readed: ${book.read}.</p>
  <button>Delete BOOK</button>`;
  return el;
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  print();
}

function print() {
  shelves.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    shelves.appendChild(newElement(myLibrary[i]));
  }
  let btn = document.querySelectorAll(".book-card > button");
  const buttons = [...btn];
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].setAttribute("value", i);
    buttons[i].addEventListener("click", (e) => deleteBook(e.target.value));
  }
}

print();

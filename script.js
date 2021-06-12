let addABook = document.querySelector('.add');
let popUp = document.querySelector('.pop-up');
let cancel = document.querySelector('.cancel');
let submit = document.querySelector('.submit');



let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

function addBookToLibrary() {
  let newBook = createBook();
  myLibrary.push(newBook);
  putBook(newBook);
  popUp.classList.remove('pop-up-active');
}

// Generate new book object
function createBook() {
  let title = document.querySelector('.title').value;
  let author = document.querySelector('.author').value;
  let pages = document.querySelector('.pages').value;
  let read = document.querySelector('.read').value;
  const newBook = new Book(title, author, pages, read);
  return newBook;
}

// Put new book in html
function putBook(book) {
    let newBook = createBook();
    let lib = document.querySelector('.library');

    let newBookUl = document.createElement('ul');
    newBookUl.classList.add('book-card');
    newBookUl.setAttribute('data-key', myLibrary.indexOf(book))
    let bookId = myLibrary.indexOf(book);

    console.table(myLibrary);

    let newTitleLi = document.createElement('li');
    newTitleLi.innerHTML = '<strong>Title:</strong> ';
  
    let newAuthorLi = document.createElement('li');
    newAuthorLi.innerHTML = '<strong>Author:</strong> ';
  
    let newPagesLi = document.createElement('li');
    newPagesLi.innerHTML = '<strong>Page count:</strong> ';
  
    let newReadLi = document.createElement('li');
    newReadLi.innerHTML = '<strong>Read:</strong> ';

    createDelete(newBookUl, lib);
    createRead(newBookUl);

  // Negauna data is ko sukurt textNode
    let newTitle = document.createTextNode(newBook.title);
    let newAuthor = document.createTextNode(newBook.author);
    let newPages = document.createTextNode(newBook.pages);
    let newRead = document.createTextNode(newBook.read);
  
    newTitleLi.appendChild(newTitle);
    newAuthorLi.appendChild(newAuthor);
    newPagesLi.appendChild(newPages);
    newReadLi.appendChild(newRead);

    newBookUl.append(newTitleLi, newAuthorLi, newPagesLi, newReadLi);
  
    lib.appendChild(newBookUl);

}


// Create 
function createDelete(book, lib) {
  let button = document.createElement('button');
  button.classList.add('delete-button');
  button.innerText = 'delete';
  
  // Display delete button on page
  book.append(button);

  button.addEventListener('click', () => {
    lib.removeChild(book);
    myLibrary.splice(myLibrary.indexOf(book), 1);
    console.table(myLibrary);
  })
}

// Create 
function createRead(book) {
  let readIt = document.createElement('button');

  readIt.classList.add('read-button');
  readIt.innerText = 'completed';

  book.append(readIt);


  readIt.addEventListener('click', () => {
    readIt.classList.toggle('read-button-completed');
  })
}




// Add
addABook.addEventListener('click', function() {
  popUp.classList.add('pop-up-active');
})

// Cancel
cancel.addEventListener('click', function() {
  popUp.classList.remove('pop-up-active');
})

// Submit
submit.addEventListener('click', addBookToLibrary)



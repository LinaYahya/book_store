const books = document.getElementById('allBooks');

const add = document.getElementById('add');
const additionForm = document.getElementById('addition');
const submitBtn = document.querySelector('.submit');

add.addEventListener('click', () => {
  additionForm.style.display = 'block';
});

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  additionForm.style.display = 'none';
});


const showBooks = (data) => {
  data.forEach((e) => {
    const newBook = document.createElement('li');
    const bookName = document.createElement('h3');
    const bookAuthor = document.createElement('span');
    const bookCate = document.createElement('span');

    bookName.textContent = e.name;
    bookAuthor.textContent = e.authors;
    bookCate.textContent = e.category;

    newBook.classList = 'newBook';
    bookName.classList = 'newBook__name';
    bookAuthor.classList = 'newBook__author';
    bookCate.classList = 'newBook__categ';

    books.appendChild(newBook);
    newBook.appendChild(bookName);
    newBook.appendChild(bookAuthor);
    newBook.appendChild(bookCate);

    if (e.reserved === 'false') {
      const reserveBook = document.createElement('button');
      reserveBook.textContent = 'Reserve Now';
      reserveBook.classList = 'newBook__reserve';
      newBook.appendChild(reserveBook);
    } else if (e.reserved === 'true') {
      const cancelReserve = document.createElement('button');
      cancelReserve.textContent = 'Cancel Reserve';
      cancelReserve.classList = 'newBook__cancelR';
      newBook.appendChild(cancelReserve);
    }
  });
};

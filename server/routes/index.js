const router = require('express').Router();
const getData = require('../Database/quiry/getData');
const addBook = require('../Database/quiry/postData')

router.get('/books', (req, res) => {
  getData()
    .then((result) => res.json(result.rows))
    .catch(console.error);
});

router.post('/add_book', (req, res) => {
  addBook(req.body)
    .then(() => res.redirect('/'))
    .catch(console.error);
});

module.exports = router;

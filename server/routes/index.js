const router = require('express').Router();
const getData = require('../Database/quiry/getData');
const addBook = require('../Database/quiry/postData');
const reserveBook = require('../Database/quiry/reserveBook');

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
router.post('/reserve', (req, res) => {
  reserveBook(req.body)
    .then(() => res.redirect('/'))
    .catch(console.error);
});

module.exports = router;

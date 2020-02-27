const router = require('express').Router();
const getData = require('../Database/quiry/getData');

router.get('/books', (req, res) => {
  getData()
    .then((result) => res.json(result.rows))
    .catch(console.error);
});

module.exports = router;

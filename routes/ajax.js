const express        = require('express');
const check          = require('../http/middlerware');
const router         = express.Router();
const BookController = require('../http/controller/ajax/book-controller');

let bookController   = new BookController();

router.get('/', (req, res) =>{
    res.render('listbook.njk', {title: 'Express'});
});

router.get('/api/books', check.searchCondition, bookController.search);

module.exports = router;
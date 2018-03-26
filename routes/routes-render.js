const express        = require('express');
const router         = express.Router();
const BookController = require('../http/controller/book-controller');
const condition      = require('../src/search-services/index');
const check          = require('./../http/middlerware/index');

let bookController = new BookController();

router.get('/', function (req, res, next) {
    req.condition = new condition.UnDeletedSearch();
    next();
}, bookController.search);

router.get('/search/keyword', function (req, res, next) {
    req.condition = new condition.KeywordSearch(req.query.keyword);
    next();
}, bookController.search);

router.get('/book/:id', function (req, res, next) {
    req.condition = new condition.IdSearch(req.params.id);
    next();
}, bookController.detail);

router.get('/create', bookController.bookFromCreate);
router.post('/create-book', check.postBookRequest, bookController.createBook);

router.get('/edit/:id', function (req, res, next) {
    req.condition = new condition.IdSearch(req.params.id);
    next();
}, bookController.bookFromEdit);

router.post('/edit-book', check.putBookRequest, bookController.editBook)

module.exports = router;
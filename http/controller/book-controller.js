class BookController {


    /**
     *
     * @param request
     * @param response
     * @param next
     */
    bookFromCreate(request, response, next) {
        request.app.get('publishers.provider').provideAll()
            .then(publishers => response.render('create.njk', {publishers: publishers}))
            .catch(next)
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    bookFromEdit(request, response, next) {
        let book = request.app.get('book.searcher').search(request.condition);
        let publisher = request.app.get('publishers.provider').provideAll();
        Promise.all([book, publisher])
            .then(Edit => response.render('save.njk', {book: Edit[0], publishers: Edit[1]}))
            .catch(next)
    }
    /**
     *
     * @param request
     * @param response
     * @param next
     */
    createBook(request, response, next) {
        request.app.get('books.repo').add(request.book)
            .then(() => response.redirect('/'))
            .catch(function (err) {
                next(err);
            });
    }

    editBook(request, response, next) {
        request.app.get('books.repo').edit(request.book)
            .then(() => response.redirect('/'))
            .catch(function (err) {
                next(err);
            });
    }
    /**
     *
     * @param request
     * @param response
     * @param next
     */
    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(books => response.render('listbook.njk',{books:books}))
            .catch(next)
    }

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    detail(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then(books => {
                if (!books.length) {
                    throw new Error('no book');
                }
                response.render('detail.njk', {book: books[0]})
            })
            .catch(next)
    }

}

module.exports = BookController;

class BookController {

    /**
     *
     * @param request
     * @param response
     * @param next
     */
    search(request, response, next) {
        request.app.get('book.searcher').search(request.condition)
            .then((results) => {
                response.json(results.map(result => result.toJson()));
                next();
            })
            .catch(next)
    }
}

module.exports = BookController;
$(document).ready(function () {
    $('#inputKeyword').change(function () {
        let $this = $(this);
        $.get('/api/books', {
            keyword: $this.val(),
        }).then(searchBooks)
    })
});

function searchBooks(books) {
    var template = $('#bookTemplate').html();
    var resultsHTML = books.map(function (book) {
        return template.replace(':bookTitle:', book.title).replace(':id:', book.id)
    }).join('');
    $('#listBooks').html(resultsHTML);

}
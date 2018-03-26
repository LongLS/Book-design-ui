$(document).ready(function () {
    $("#title").keydown(function () {
        if ($("#title").val() === '') {
            $("#showTitle").show();
            $("#click").prop('disabled', true);
        }
        else {
            $("#showTitle").hide();
            $("#click").prop('disabled', false);
        }
    });

    $("#author").keydown(function () {
        if ($("#author").val() === '') {
            $("#showAuthor").show();
            $("#click").prop('disabled', true);
        }
        else {
            $("#showAuthor").hide();
            $("#click").prop('disabled', false);
        }
    });

    $("#price").keydown(function () {
        if ($("#price").val() === '') {
            $("#showPrice").show();
            $("#click").prop('disabled', true);
        }
        else {
            $("#showPrice").hide();
            $("#click").prop('disabled', false);
        }
    })
});

$(document).ready(function(){
    $("#click").click(function(){
        alert("Create Success!");
    });
});


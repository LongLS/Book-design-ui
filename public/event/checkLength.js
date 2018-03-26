$(document).ready(function () {
    $("#title").change(function () {
        if ($("#title").val().length > 40){
            $("#40length").show();
            $("#click").prop('disabled', true);
        }
        else {
            $("#40length").hide();
            $("#click").prop('disabled', false);
        }
    });
});
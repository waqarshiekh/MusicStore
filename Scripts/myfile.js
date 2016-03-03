
$(document).ready(function () {

    $("#logout").hide();
    $("#upload").hide();

    
        $("#login").click(function () {
            $("#logout").show();
            $("#upload").show();
            $("#login").hide();
        });
    


        $("#logout").click(function () {
            $("#logout").hide();
            $("#upload").hide();
            $("#logoin").show();
        });
    
});
$(window).load(function () {
    $(".loader_inner").fadeOut();
    $(".loader").delay(100).fadeOut("slow");
});
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

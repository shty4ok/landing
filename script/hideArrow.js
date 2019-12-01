$(window).scroll(function(){
    var pos = $(window).scrollTop();

    $('.' + 'fa-chevron-down').css('opacity',1 - (pos/200))
});
$(document).ready(function () {
    //햄버거 메뉴//
    $(".hambuger").click(function () {
        $("nav").slideToggle();
    });


    $(window).resize(function () {
        if (window.innerWidth <= 850) {
            $('nav').hide();
        } else {
            $('nav').show();
        };
    });
});

$(document).ready(function () {
    //슬라이드탭//
    $(".subslide").click(function () {
        $("nav").slideToggle();
    });


    $(window).resize(function () {
        if (window.innerWidth <= 850) {
            $('nav').hide();
        } else {
            $('nav').show();
        };
    });
});
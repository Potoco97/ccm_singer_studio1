$(document).ready(function () {
    //공지사항탭메뉴//
    $('.tab_menu').click(function () {
        let index = $(this).index();

        $('.tab_sub').eq(index).show().siblings().hide();
        $(this).addClass("active").siblings().removeClass("active");
    });
});
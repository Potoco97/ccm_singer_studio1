
function prev() {
    $('.slide li:last').prependTo('.slide');
    $('.slide').css('margin-left', "-100%");
    $('.slide').stop().animate({ marginLeft: 0 }, 1000);
}

function next() {
    $('.slide').stop().animate({ marginLeft: "-100%" }, 1000, function () {
        $('.slide li:first').appendTo('.slide');
        $('.slide').css({ marginLeft: 0 });
    });
};

setInterval(next, 5000);

$('.prev').click(function () {
    prev();
});
$('.next').click(function () {
    next();
});
/********* sticky header *******/
$(window).scroll(function () {
    if ($(window).scrollTop() > 0) {
        $(".header").addClass("sticky");
        $(".header-cover").addClass("sticky-none");
        $(".logo").addClass("sticky-none");
        $(".navbar-nav").addClass("mnew-auto");
    } else {
        $(".header").removeClass("sticky");
        $(".header-cover").removeClass("sticky-none");
        $(".logo").removeClass("sticky-none");
        $(".navbar-nav").removeClass("mnew-auto");
    }
});
/********* sticky header *******/

/*********** wow js ************/
$(document).ready(function () {
    var wow = new WOW(
        {
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: true,
            live: true,
            callback: function (box) {
            },
            scrollContainer: null,
            resetAnimation: true,
        }
    );
    wow.init();
});
/*********** wow js ************/
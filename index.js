// Document loading + animation
$(document).ready(function () {
    $(document).scrollTop(0);
    setTimeout(function () {
        $(".front").slideUp();

        setTimeout(function () {
            $(".mid").slideUp();
        }, 100);

        setTimeout(function () {
            $(".back").slideUp(function () {
                $(".navbar").removeClass("send-back");
            });
        }, 200);
    }, 100);
});

// Navbar toggler click functionality
$(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("opened ");
    $(".navbar").toggleClass("navbar-scrolled");
});

// add scrolled class to navbar if scrolled
$(window).scroll(function () {
    var scrollPos = $(document).scrollTop();
    if (scrollPos > 0) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        if ($(".navbar-collapse").hasClass("show") === false) {
            $(".navbar").removeClass("navbar-scrolled");
        }
    }
});
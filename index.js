// var tooltip = new bootstrap.Tooltip($('.turned-off'), top);

$(function () {
 $('[data-tooltip]').tooltip();
});

// Variables
var scrollPos = 0;

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
    }, 500);
});

// Navbar toggler click functionality
$(".hamburger").click(function () {
    $(".hamburger").toggleClass("opened ");
    $(".navbar").toggleClass("menu-collapsed");
    if ($(".navbar").hasClass("navbar-scrolled") === true && scrollPos === 0) {
        $(".navbar").removeClass("navbar-scrolled");
    } else {
        $(".navbar").addClass("navbar-scrolled");
    }
});

// add scrolled class to navbar if scrolled
$(window).scroll(function () {
    scrollPos = $(document).scrollTop();
    if (scrollPos > 0) {
        $(".navbar").addClass("navbar-scrolled");
    } else {
        if ($(".hamburger").hasClass("opened") === false) {
            $(".navbar").removeClass("navbar-scrolled");
        }
    }
});

// card button functionality
$($(".carbon-quiz-btn")[1]).click(function () {
    window.open("https://thomasbrettell.itch.io/the-carbon-quiz-webgl");
})
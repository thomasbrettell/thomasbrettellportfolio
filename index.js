// Bootstrap tooltips
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

// Intro btn functionality
$($(".intro-btn")[0]).click(function () {
    $(document).scrollTop($("#contact")[0].offsetTop - 64);
});

$(".cv-btn").click(function () {
    window.open("assets/ThomasBrettellCV 300121.pdf");
});

// card button functionality
// $($(".carbon-quiz-btn")[0]).click(function () {
//     window.location.href = "the-carbon-quiz-about.html";
// });
$($(".carbon-quiz-btn")[1]).click(function () {
    window.open("https://thomasbrettell.itch.io/the-carbon-quiz-webgl");
});

$($(".cazna-btn")[1]).click(function () {
    window.open("https://thomasbrettell.github.io/cazna-site/");
});

$($(".sleep-orbit-btn")[1]).click(function () {
    window.open("https://www.youtube.com/watch?v=kIWMUkRbbkg&ab_channel=ThomasBrettell");
});

$($(".global-death-btn")[1]).click(function () {
    window.open("https://thomasbrettell.github.io/nationdeathsdatavis/");
});

$($(".olympics-vis-btn")[1]).click(function () {
    window.open("assets/olympics-vis/Success-at-the-summer-Olympics-became-more-globalised-as-a-result-of-World-War-2.pdf");
});

$($(".domestic-violence-vis-btn")[1]).click(function () {
    window.open("assets/domestic-violence-vis/Is-Summer-the-Season-for-Domestic-Violence.pdf");
});

$($(".museum-btn")[1]).click(function () {
    window.open("assets/museum/Children-at-the-Museum.pdf");
});

// Navbar functionality
$(".menu-links").click(function (e) {
    switch (e.target.innerText) {
        case "THOMAS BRETTELL":
            $(document).scrollTop(0);
            break;

        case "Home":
            window.location.href = "index.html";
            break;

        case "My Work":
            $(document).scrollTop($("#work")[0].offsetTop - 64);
            break;

        case "About Me":
            $(document).scrollTop($("#about")[0].offsetTop - 64);
            break;

        case "Contact Me":
            $(document).scrollTop($("#contact")[0].offsetTop - 64);
            break;
    }
});

// The Carbon Quiz Page
$($(".carbon-quiz-intro-btn")[0]).click(function () {
    window.open("assets/carbon-quiz/TheCarbonQuiz-ConceptProposal.pdf");
});
$($(".carbon-quiz-intro-btn")[1]).click(function () {
    window.open("assets/carbon-quiz/TheCarbonQuiz-LowFi.pdf");
});
$($(".carbon-quiz-intro-btn")[2]).click(function () {
    window.open("assets/carbon-quiz/TheCarbonQuiz-HighFi.pdf");
});

// Code by Isaac Morrow

// var bg_color = getComputedStyle(document.documentElement)
//     .getPropertyValue('--main-bg-color');
// console.log(bg_color);

var darkTheme = true;

//toggles the navigation bar for mobile.
function toggleNav() {
    var navbar = document.querySelector("#navbar");
    var menu = document.querySelector("#menu");
    var backgroundimage = document.querySelector("#backgroundimage");

    menu.classList.toggle("change");
    navbar.classList.toggle("movenav");
}

function toggleTheme() {

    // Get the current theme colors:
    var bg_color = getComputedStyle(document.documentElement).getPropertyValue('--main-bg-color');

    var theme = document.getElementById("theme-toggle");
    console.log(theme.innerHTML);


    // Change to light theme
    if (darkTheme) {
        darkTheme = false;

        document.documentElement.style.setProperty('--main-bg-color', '#fff');
        document.documentElement.style.setProperty('--main-secondary-bg-color', 'silver');
        document.documentElement.style.setProperty('--main-text-color', '#212121');
        document.documentElement.style.setProperty('--main-accent-color', '#3498db')

        theme.innerHTML = "Dark Theme";

    }

    // Change to dark theme
    else {
        darkTheme = true;

        document.documentElement.style.setProperty('--main-bg-color', '#303030');
        document.documentElement.style.setProperty('--main-secondary-bg-color', '#4C4A48');
        document.documentElement.style.setProperty('--main-text-color', '#fff');

        document.documentElement.style.setProperty('--main-accent-color', '#e74c3e')

        theme.innerHTML = "Light Theme";
    }

    // var sec_bg_color = getComputedStyle(document.documentElement).getPropertyValue('--main-secondary-bg-color');
    // var text_color = getComputedStyle(document.documentElement).getPropertyValue('--main-text-color')
    


    

}

// changes the styling after the image is scrolled past.
$(document).scroll(function () {
    var currentscroll = $(document).scrollTop();
    var distance = $("#footer").offset().bottom;

    if (currentscroll + 10 > distance) {
        console.log("hit");
    } 
});

// smooth scrolling.
$(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var targetEle = this.hash;
        var $targetEle = $(targetEle);

        $('html, body').stop().animate({
            'scrollTop': $targetEle.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = targetEle;
        });
    });
});
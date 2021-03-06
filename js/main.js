
$(document).ready(function () {
    $('.projects').hide(0);
    $('.contacts').hide(0);
    $('.about-section').hide(0);
    initializeSocialLinks();

})

function initializeSocialLinks() {
    $('.fa-facebook').click(function () {
        window.open("https://www.facebook.com/aniket965.as", "facebook");
    });
    $('.fa-twitter').click(function () {
        window.open("https://twitter.com/aniket965as", "twitter");
    });
    $('.fa-rss').click(function () {
        window.open("http://aniket965.tech/blog", "blog");
    });
    $('.fa-linkedin').click(function () {
        window.open("https://www.linkedin.com/in/aniket-sharma-548413131/", "linkedin");
    });
    $('.fa-medium').click(function () {
        window.open("https://medium.com/@aniket965", "medium");
    });
    $('.fa-github').click(function () {
        window.open("https://github.com/aniket965", "github");
    });

    $('.fa-envelope').click(function () {
        location.href = "mailto:aniket965.as@gmail.com";
    });
    $('.fa-google-plus').click(function () {
        window.open("https://plus.google.com/+AniketSharma965", "Google Plus");
    });

    $('.fa-codepen').click(function () {
        window.open("https://codepen.io/aniket965", "Codepen");
    });

}

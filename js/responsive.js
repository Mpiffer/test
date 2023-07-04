$(document).ready(function() {
    function makeResponsive() {
        if ($(window).width() < 768) {
            $('#navbar').addClass('mobile-nav');
            $('#main-content').addClass('mobile-content');
            $('#footer').addClass('mobile-footer');
        } else {
            $('#navbar').removeClass('mobile-nav');
            $('#main-content').removeClass('mobile-content');
            $('#footer').removeClass('mobile-footer');
        }
    }

    makeResponsive();

    $(window).resize(function() {
        makeResponsive();
    });
});
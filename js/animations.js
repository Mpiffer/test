$(document).ready(function() {
    AOS.init();

    function animateElements() {
        $('.animated-element').each(function() {
            var animationName = $(this).data('animation');
            var animationDelay = $(this).data('animation-delay');
            $(this).css('animation-delay', animationDelay);
            $(this).addClass('animated ' + animationName);
        });
    }

    $(window).on('load', function() {
        animateElements();
    });

    $(window).on('scroll', function() {
        animateElements();
    });
});
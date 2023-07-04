$(document).ready(function() {
    var mainNav = $('#navbar');
    var mainContent = $('#main-content');
    var footer = $('#footer');

    function loadPortfolio() {
        $.getJSON('portfolioData.json', function(data) {
            var output = '';
            $.each(data, function(key, val) {
                output += '<div class="portfolio-item">';
                output += '<img src="img/' + val.image + '" alt="' + val.title + '">';
                output += '<h3>' + val.title + '</h3>';
                output += '<p>' + val.description + '</p>';
                output += '</div>';
            });
            $('#portfolio').html(output);
        }).done(function() {
            console.log('portfolioLoadMsg');
        });
    }

    function loadServices() {
        $.getJSON('serviceData.json', function(data) {
            var output = '';
            $.each(data, function(key, val) {
                output += '<div class="service-item">';
                output += '<img src="img/' + val.image + '" alt="' + val.title + '">';
                output += '<h3>' + val.title + '</h3>';
                output += '<p>' + val.description + '</p>';
                output += '</div>';
            });
            $('#services').html(output);
        }).done(function() {
            console.log('serviceLoadMsg');
        });
    }

    function loadContact() {
        $.getJSON('contactData.json', function(data) {
            var output = '';
            $.each(data, function(key, val) {
                output += '<div class="contact-item">';
                output += '<h3>' + val.title + '</h3>';
                output += '<p>' + val.description + '</p>';
                output += '</div>';
            });
            $('#contact').html(output);
        }).done(function() {
            console.log('contactLoadMsg');
        });
    }

    function animateElements() {
        AOS.init({
            duration: 1200,
        });
    }

    function makeResponsive() {
        if ($(window).width() < 768) {
            mainNav.addClass('mobile-nav');
            mainContent.addClass('mobile-content');
            footer.addClass('mobile-footer');
        } else {
            mainNav.removeClass('mobile-nav');
            mainContent.removeClass('mobile-content');
            footer.removeClass('mobile-footer');
        }
    }

    loadPortfolio();
    loadServices();
    loadContact();
    animateElements();
    makeResponsive();

    $(window).resize(function() {
        makeResponsive();
    });
});
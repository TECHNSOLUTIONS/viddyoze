$(document).ready(function() {
    $('#forgotten_password').click(function() {
        $('.overlay').fadeIn(100);
        $('.forgot-holder').fadeIn();
        $('.quick-register').animate({opacity : "0.1"}, 100);
    });

    $('#close_forgotten').click(function() {
        $('.overlay').fadeOut(100);
        $('.forgot-holder').fadeOut();
        $('.quick-register').animate({opacity : "1"}, 100);
    });

    $('#sign_up').click(function() {
        $('.overlay').fadeIn(100);
        $('.register-holder').fadeIn();
        $('.happy-people').fadeIn();
    });

    $('#close_register').click(function() {
        $('.overlay').fadeOut(100);
        $('.register-holder').fadeOut();
        $('.happy-people').fadeOut();
    });
});
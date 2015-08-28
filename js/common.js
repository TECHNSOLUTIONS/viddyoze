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

    $('.custom-label, .label_radio').click(function(){
        setupLabel();

    });
    setupLabel();

});


function setupLabel() {
    if ($('.custom-label input').length) {
        $('.custom-label').each(function(){
            $(this).removeClass('checked');
            $('.delete-all').hide();
        });
        $('.custom-label input:checked').each(function(){
            $(this).parent('label').addClass('checked');
            $('.delete-all').show();
        });
    };
    if ($('.label_radio input').length) {
        $('.label_radio').each(function(){
            $(this).removeClass('r_on');
        });
        $('.label_radio input:checked').each(function(){
            $(this).parent('label').addClass('r_on');
        });
    };
};
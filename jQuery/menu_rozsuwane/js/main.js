// $(document).ready(function() {
//     $('.hamburger').click(function() {
//         $('.main-menu').toggleClass('open');
//     });

//     $('.main-menu-item a').click(function(e) {
//         // preventDefault, by się nie przeładowywało
//         e.preventDefault();

//         // efekt wygaszania contentu i odesłanie do strony:
//         $('body').fadeOut(2000, function() {
//             // poniższy zapis zwraca wartość atrybutu klikniętego odnośnika (obiektu)
//             window.location.href = $(e.target).attr('href');
//         });


//     });
// });


$(document).ready(function() {
    $('.hamburger').click(function() {
        if ($('.main-menu').hasClass('open')) {
            $('.main-menu').slideUp(1000);
            $('.main-menu').removeClass('open')
        } else {
            $('.main-menu').slideDown(1000);
            $('.main-menu').addClass('open');
        }

    });

    $('.main-menu-item a').click(function(e) {
        // preventDefault, by się nie przeładowywało
        e.preventDefault();

        // efekt wygaszania contentu i odesłanie do strony:
        $('body').fadeOut(2000, function() {
            // poniższy zapis zwraca wartość atrybutu klikniętego odnośnika (obiektu)
            window.location.href = $(e.target).attr('href');
        });


    });
});
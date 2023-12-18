$(document).ready(function () {
    $('.home-services__items').slick({
        infinite: false,
        slidesToShow: 3,
        prevArrow: $('.home-services__button-prev'),
        nextArrow: $('.home-services__button-next'),
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
})

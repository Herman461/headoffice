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


// Модальные окна
window.addEventListener('click', function(e) {
    if (e.target.closest('[data-modal-link]')) {
        const link = e.target.closest('[data-modal-link]')
        e.preventDefault()
        const scrollWidth = window.innerWidth - document.body.clientWidth

        const modalTitle = '#' + link.dataset.modalLink

        document.querySelector(modalTitle).classList.add('active')

        document.body.classList.add('lock')

        document.body.style.paddingRight = scrollWidth + 'px'
    }

    if (e.target.closest('[data-modal-close]')) {
        e.preventDefault()
        const closeButton = e.target.closest('[data-modal-close]')
        closeButton.closest('.base-modal').classList.remove('active')
        if (closeButton.closest('.base-modal').querySelector('video')) {
            closeButton.closest('.base-modal').querySelector('video').pause()
            closeButton.closest('.base-modal').querySelector('video').currentTime = 0
        }
        closeButton.closest('.base-modal').classList.remove('active')
        document.body.classList.remove('lock')
        setTimeout(() => {

            document.body.style.paddingRight = 0
        }, 300)
    }

    if (e.target.closest('.base-modal')) {
        if (!e.target.closest('.base-modal__content')) {
            e.target.closest('.base-modal').classList.remove('active')

            setTimeout(() => {
                document.body.classList.remove('lock')
                document.body.style.paddingRight = 0
            }, 400)
        }
    }
})

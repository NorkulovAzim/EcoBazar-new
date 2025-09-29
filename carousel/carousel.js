const swiper = new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,


    pagination: {
        el: '.swiper-pagination',
        clickable: true, 
        dynamicBullets: true,
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        480: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        640: {
            slidesPerView: 3,
        }
    }

});
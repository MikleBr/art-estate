const swiper = new Swiper('.product-card__carousel', {
    loop: true,
    spaceBetween: 100,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
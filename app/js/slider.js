import Swiper from 'swiper'
import SwiperCore, {Navigation, Pagination} from 'swiper/core'
SwiperCore.use([Navigation, Pagination])

new Swiper('.card-slider', {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    }
})

new Swiper('.category-slider', {
    slidesPerView: 5,
    spaceBetween: 34,
    pagination: {
        el: ".pagination-pages",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination-dot ' + className + '"></span>';
        },
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1366: {
            slidesPerView: 5,
            spaceBetween: 34,

        },
    },
    navigation: {
        nextEl: ".pagination .next",
        prevEl: ".pagination .prev",
    },
})

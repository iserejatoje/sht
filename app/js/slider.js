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


new Swiper('.front-slider', {
    slidesPerView: 1,
    virtualTranslate: true,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})

new Swiper('.shop-slider', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".shop-slider .pagination .next",
        prevEl: ".shop-slider .pagination .prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        450: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        700: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        990: {
            slidesPerView: 4,
            spaceBetween: 34,

        },
    },
    pagination: {
        el: ".shop-slider .pagination-pages",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination-dot ' + className + '"></span>';
        },
    },
})

new Swiper('.partners-slider', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".partners-slider .pagination .next",
        prevEl: ".partners-slider .pagination .prev",
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
        900: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1140: {
            slidesPerView: 4,
            spaceBetween: 24,

        },
    },
    pagination: {
        el: ".partners-slider .pagination-pages",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination-dot ' + className + '"></span>';
        },
    },
})

new Swiper('.certificates-slider', {
    slidesPerView: 4,
    spaceBetween: 24,
    navigation: {
        nextEl: ".certificates-slider .pagination .next",
        prevEl: ".certificates-slider .pagination .prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        824: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        1250: {
            slidesPerView: 3,
            spaceBetween: 26,
        },
    },
    pagination: {
        el: ".certificates-slider .pagination-pages",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination-dot ' + className + '"></span>';
        },
    },
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

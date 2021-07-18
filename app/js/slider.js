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

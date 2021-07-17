import IMask from 'imask'
import * as $ from 'jquery/dist/jquery.slim.min'
// import Swiper from 'swiper'
// import SwiperCore, {Navigation, Pagination} from 'swiper/core'
import {initMap} from './map'

const phoneMask = document.querySelectorAll('[type="tel"]')
phoneMask.forEach(element => IMask(element, {
    mask: '+{7} (000) 000-00-00'
}))

document.addEventListener('DOMContentLoaded', () => {
    // initTrainEvent()
    initMap()
})
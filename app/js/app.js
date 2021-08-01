import IMask from 'imask'
import $ from 'jquery/dist/jquery'
import selectric from '../js/jquery.selectric.min'
import {initMap} from './map'

const phoneMask = document.querySelectorAll('[type="tel"]')
phoneMask.forEach(element => IMask(element, {
    mask: '+{7} (000) 000-00-00'
}))

document.addEventListener('DOMContentLoaded', () => {
    initMap()

    $('.view-cert').click(function () {
        $(this).parents('.swiper-slide').find('[data-imagebox]').click()
        return false;
    })
})

$('select').selectric()

export function initMap() {
    let mapShowed = false

    function elementInViewport(el) {
        let top = el.offsetTop
        let left = el.offsetLeft
        let width = el.offsetWidth
        let height = el.offsetHeight
        while (el.offsetParent) {
            el = el.offsetParent
            top += el.offsetTop
            left += el.offsetLeft
        }
        return (
            top < (window.pageYOffset + window.innerHeight) &&
            left < (window.pageXOffset + window.innerWidth) &&
            (top + height) > window.pageYOffset &&
            (left + width) > window.pageXOffset
        )
    }

    function mapInit() {
        if (document.getElementById('map') && elementInViewport(document.getElementById('map')) && !mapShowed) {
            if (document.getElementById('map')) {
                let map,
                    pin,
                    marker

                mapShowed = true
                let script = document.createElement("script")
                script.type = "text/javascript"
                script.src = "js/leaflet.min.js"
                document.getElementsByTagName("body")[0].appendChild(script)
                script.onload = function () {
                    map = L.map('map', {
                        attributionControl: false,
                        scrollWheelZoom: false
                    }).setView([document.getElementById('map').getAttribute('data-lat'), document.getElementById('map').getAttribute('data-lng')], 16)
                    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(map)
                    pin = L.icon({
                        iconUrl: 'sprite/sprite.svg#pin',
                        iconSize: [49, 72],
                        iconAnchor: [24.5, 72],
                    })
                    marker = L.marker([document.getElementById('map').getAttribute('data-lat'), document.getElementById('map').getAttribute('data-lng')], {icon: pin})
                    map.addLayer(marker)
                }
            }
        }
    }

    mapInit()
    window.addEventListener('scroll', () => {
        mapInit()
    })
}

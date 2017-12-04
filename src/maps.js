const GoogleMapsLoader = require('google-maps');

function initMaps() {
    GoogleMapsLoader.KEY = 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU';
    GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

    const mapEl = document.getElementById('map');
    const options = {
        center: {lat: 47.497, lng: 19.040},
        zoom: 15,
        // styles: styles,
        mapTypeControl: false
    };

    GoogleMapsLoader.load(function(google) {
        const map = new google.maps.Map(mapEl, options);
    });
}

module.exports = initMaps();
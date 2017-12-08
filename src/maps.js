const GoogleMapsLoader = require('google-maps');

const gmaps = {
    initMaps: function() {
        GoogleMapsLoader.KEY = 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

        const mapEl = document.getElementById('map-canvas');
        const options = {
            center: {lat: 47.497, lng: 19.040},
            zoom: 15,
            // styles: styles,
            mapTypeControl: false
        };
        GoogleMapsLoader.load(function(google) {
            window.map = new google.maps.Map(mapEl, options);
            const myLatLng = {lat: 47.497667, lng: 19.04103};
            let marker = new google.maps.Marker({
                position: myLatLng,
                map: window.map,
                title: 'Hello World!'
            });
        });
    },
    resize: function() {
        const map = window.map;
        const center = map.getCenter();
        GoogleMapsLoader.load(function(google) {
            const repeatResize = setInterval(function(){
                google.maps.event.trigger(map, "resize");
                map.setCenter(center);
            }, 5);
            setTimeout(function(){
                clearTimeout(repeatResize);
            }, 500);
        });
    },
    createMarker: function(position, title) {
        const map = window.map;
        GoogleMapsLoader.load(function(google) {
            const marker = new google.maps.Marker({
                position: position,
                map: map,
                title: title
            });
        });
    },
    filterMarkers: function() {
        // hide filtered markers and show only what is listed
    }
}


module.exports = {
    Gmaps: gmaps,
};
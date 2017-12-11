const GoogleMapsLoader = require('google-maps');

const gmaps = {
    initMaps: function() {
        GoogleMapsLoader.KEY = 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

        const mapEl = document.getElementById('map-canvas');
        const options = {
            center: {lat: 47.497, lng: 19.040},
            zoom: 10,
            // styles: styles,
            mapTypeControl: false
        };
        GoogleMapsLoader.load(function(google) {
            window.map = new google.maps.Map(mapEl, options);
            window.markers = [];
            // set up event listener to auto-zoom if bounds change
            google.maps.event.addListenerOnce(window.map, 'bounds_changed', function(event) {
                this.setZoom(window.map.getZoom()-1);
                // set up minimal zoom level
                if (this.getZoom() > 15) {
                  this.setZoom(15);
                }
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
            }, 300);
        });
    },
    createMarker: function(place) {
        GoogleMapsLoader.load(function(google) {
            const map = window.map;
            const marker = new google.maps.Marker({
                position: place.position,
                map: map,
                title: place.title
            });
            window.markers.push(marker);
        });
    },
    centerMap: function() {
        GoogleMapsLoader.load(function(google) {
            const map = window.map;
            const markers = window.markers;
            const bounds = new google.maps.LatLngBounds();
            markers.forEach((marker) => {
                bounds.extend(marker.getPosition());
            });
            //center the map to the geometric center of all markers
            map.setCenter(bounds.getCenter());
            map.fitBounds(bounds);
        });
    },
    filterMarkers: function() {
        // hide filtered markers and show only what is listed
    }
}


module.exports = gmaps;
const GoogleMapsLoader = require('google-maps');

const gmaps = {
    initMaps: function() {
        GoogleMapsLoader.KEY = 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

        const mapEl = document.getElementById('map-canvas');
        const options = {
            center: {lat: 47.509205473526436, lng: 19.035126200000036},
            zoom: 15,
            // styles: styles,
            mapTypeControl: false
        };
        GoogleMapsLoader.load(function(google) {
            window.map = new google.maps.Map(mapEl, options);
            window.markers = [];
            // set up event listener to auto-zoom if bounds change
            google.maps.event.addListener(window.map, 'bounds_changed', function() {
                let zoom = window.map.getZoom();
                // set minimum zoom level
                if (zoom > 16) {
                    window.map.setZoom(16);
                } else {
                    window.map.setZoom(zoom);
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
                map.panTo(center);
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
                title: place.title,
                animation: google.maps.Animation.DROP
            });
            window.markers.push(marker);
        });
    },
    centerMap: function() {
        GoogleMapsLoader.load(function(google) {
            const map = window.map;
            const markers = window.markers;
            const bounds = new google.maps.LatLngBounds();
            let validCenter = false;
            markers.forEach((marker) => {
                if (marker.map) {
                    bounds.extend(marker.getPosition());
                    validCenter = true;
                }
            });
            //center the map to the geometric center of all markers
            if (validCenter) {
                map.panTo(bounds.getCenter());
                map.fitBounds(bounds);
            }
        });
    },
    filterMarkers: function(filteredMarkers) {
        const map = window.map;
        const markers = window.markers;
        const filteredTitles = filteredMarkers.map((place) => place.title);
        if (markers) {
            markers.forEach((marker) => {
                if (filteredTitles.includes(marker.title)) {
                    if (marker.map === null) marker.setMap(map);
                } else {
                    marker.setMap(null);
                };
            });
        }
    }
}


module.exports = gmaps;
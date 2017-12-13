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
            window.largeInfowindow = new google.maps.InfoWindow();
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
            const largeInfowindow = window.largeInfowindow;
            // helper functions
            function makeMarkerIcon(color) {
                const markerImage = new google.maps.MarkerImage(
                    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' +
                    color +
                    '|40|_|%E2%80%A2',
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(10, 34),
                    new google.maps.Size(21,34));
                return markerImage;
            }
            function populateInfoWindow(selectedMarker, infowindow) {
                if (infowindow.marker !== selectedMarker) {
                    infowindow.setContent(selectedMarker.title);
                    infowindow.marker = selectedMarker;

                    infowindow.addListener('closeclick', function() {
                        infowindow.marker = null;
                    });
                    infowindow.open(map, selectedMarker);
                }
            }

            const defaultIcon = makeMarkerIcon('0091ff');
            const highlightedIcon = makeMarkerIcon('FFFF24');
            const marker = new google.maps.Marker({
                position: place.position,
                map: map,
                title: place.title,
                animation: google.maps.Animation.DROP,
                icon: defaultIcon
            });

            window.markers.push(marker);

            // add listeners
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfowindow);
            });
            marker.addListener('mouseover', function() {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function() {
                this.setIcon(defaultIcon);
            });

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
const GoogleMapsLoader = require('google-maps'); // eslint-disable-line import/no-unresolved
// const fsqAPI = require('node-foursquare-venues')('DAO3ODRAFGKNUOJPECEJWGWC1BYT4ILRO31PHCT5EE3U5EVT', 'BOU1F43LDLPMSOTT5PQT5CKV0NIOZGQPHISXIGX33WBJWWNW'); // eslint-disable-line import/no-unresolved
const fsq = require('./fsq');
// const modal = require('./modal');

const gmaps = {
    initMaps: function() {
        GoogleMapsLoader.KEY = 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

        GoogleMapsLoader.load(function(google) {
            const mapEl = document.getElementById('map-canvas');
            const bp = new google.maps.LatLng(47.4979, 19.0402);
            const options = {
                center: bp,
                zoom: 15,
                mapTypeControl: false
            };
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
        if (map) {
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
        }
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
            // Adding streetview to infowindow
            function processStreetView(data, status) {
                if (status === google.maps.StreetViewStatus.OK) {
                    this.largeInfowindow.setContent(
                        `<div id="info-title">
                            <span class="info-title">${this.largeInfowindow.anchor.title}</span>
                        </div>
                        <div class="flex-container flex-center">
                            <div id="pano"></div>
                            <div id="fsq"></div>
                        </div>`
                    );
                    const loc = data.location.latLng;
                    const heading = google.maps.geometry.spherical.computeHeading(
                        loc, this.largeInfowindow.anchor.position
                    );
                    const options = {
                        position: loc,
                        pov: {
                            heading: heading - 15,
                            pitch: 5
                        },
                        disableDefaultUI: true
                    };
                    // eslint-disable-next-line no-unused-vars
                    const panorama = new google.maps.StreetViewPanorama(
                        document.getElementById('pano'), options
                    );

                    let change = 1;
                    const move = setInterval(() => {
                        let pov = panorama.getPov();
                        pov.heading += change;
                        pov.pitch += change * 0.8999;
                        panorama.setPov(pov);
                        change *= 0.95;
                    }, 10);
                    setTimeout(() => {
                        clearInterval(move);
                    }, 1500);


                } else {
                    this.largeInfowindow.setContent(
                        `<div id="info-title">
                            <span class="info-title">${this.largeInfowindow.anchor.title}</span>
                        </div>
                        <div id="fsq"></div>`
                    );
                }
            }

            // Setting up the infowindow
            function populateInfoWindow(selectedMarker, infowindow) {
                if (infowindow.marker !== selectedMarker) {
                    const listItem = document.getElementById(selectedMarker.id);
                    let prevListItem;
                    if (infowindow.marker) {
                        prevListItem = document.getElementById(infowindow.marker.id);
                    }
                    infowindow.setContent(selectedMarker.title);
                    infowindow.marker = selectedMarker;

                    // Launch foursquare search
                    const searchObj = {
                        ll: `${selectedMarker.position.lat()},${selectedMarker.position.lng()}`,
                        query: selectedMarker.title
                    };
                    fsq.search(searchObj);

                    // Setup streetview
                    const SVService = new google.maps.StreetViewService();
                    const rad = 50;
                    SVService.getPanorama({location: selectedMarker.position, radius: rad}, processStreetView)

                    // open the infowindow
                    infowindow.open(map, selectedMarker);

                    // make the item active in the list
                    listItem.classList.toggle("active");
                    if (prevListItem) {
                        prevListItem.classList.toggle("active");
                    }

                    // event listener for closing the infowindow
                    infowindow.addListener('closeclick', function() {
                        if (infowindow.marker) {
                            const currentItem = document.getElementById(infowindow.marker.id);
                            currentItem.classList.toggle("active");
                        }
                        infowindow.marker = null;
                    });
                }
            }

            function markerBounce(thisMarker) {
                thisMarker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(() => {
                    thisMarker.setAnimation(null);
                }, 1000);
            }

            const defaultIcon = makeMarkerIcon('d22626');
            const highlightedIcon = makeMarkerIcon('ff6464');
            const marker = new google.maps.Marker({
                position: place.position,
                map: map,
                title: place.title,
                animation: google.maps.Animation.DROP,
                icon: defaultIcon,
                id: place.id
            });

            window.markers.push(marker);

            // add listeners
            marker.addListener('click', function() {
                populateInfoWindow(this, largeInfowindow);
                markerBounce(this);
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
    },
    selectMarker: function(place) {
        GoogleMapsLoader.load(function(google) {
            const markers = window.markers;
            markers.forEach((marker) => {
                if (place.title === marker.title) {
                    google.maps.event.trigger(marker, 'click');
                }
            });
        });
    }
}

module.exports = gmaps;
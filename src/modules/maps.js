const GoogleMapsApiLoader = require('google-maps-api-loader'); // eslint-disable-line import/no-unresolved
const ko = require('../../lib/knockout/knockout-3.4.2');
const fsq = require('./fsq');

const mapEl = document.getElementById('map-canvas');
const mapsPromise = GoogleMapsApiLoader({
    libraries: ['geometry', 'places'],
    apiKey: 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU'
}).then(
    (google) => google,
    (err) => {
        mapEl.innerHTML = 'Something went wrong with Google Maps. Please check the console log.';
        console.error(err);
    }
);

const gmaps = {
    mapPromise: mapsPromise,
    mapInit: function(viewModel) {
        mapsPromise.then((google) => {
            const bp = new google.maps.LatLng(47.4979, 19.0402);
            const options = {
                center: bp,
                zoom: 15,
                mapTypeControl: false
            };
            viewModel.map = new google.maps.Map(mapEl, options);
            // set up event listener to auto-zoom if bounds change
            google.maps.event.addListener(viewModel.map, 'bounds_changed', function() {
                let zoom = viewModel.map.getZoom();
                // set minimum zoom level
                if (zoom > 16) {
                    viewModel.map.setZoom(16);
                } else {
                    viewModel.map.setZoom(zoom);
                }
            });
            // set up event listener to center the map if window size changes
            google.maps.event.addDomListener(window, 'resize', this.centerMap);
            window.markers = [];
        }, (err) => {
            console.error(err);
        });
    },
    infoWindowInit: function(viewModel) {
        let infoWindowHTML = '<div id="info-window">'
        infoWindowHTML += '<div id="info-title" data-bind="with: activePlace">';
        infoWindowHTML += '<span class="info-title" data-bind="text: title"></span>';
        infoWindowHTML += '</div>';
        infoWindowHTML += '<div class="flex-container flex-center">';
        infoWindowHTML += '<div id="pano"></div>';
        infoWindowHTML += '<div id="fsq" data-bind="foreach: fsqImages">'
        infoWindowHTML += '<a class="place-img-ele">';
        infoWindowHTML += '<img alt="Photo of place" data-bind="attr: {src: thumbSrc}, click: $parent.openModal(origSrc)">';
        infoWindowHTML += '</a>';
        infoWindowHTML += '</div>';
        infoWindowHTML += '</div>';
        infoWindowHTML += '</div>';

        let infoWindow;
        let isInfoWindowLoaded = false;

        mapsPromise.then((google) => {
            infoWindow = new google.maps.InfoWindow({
                content: infoWindowHTML
            });
            viewModel.infoWindow = infoWindow;
            /*
            * When the info window opens, bind it to Knockout.
            * Only do this once.
            */
            google.maps.event.addListener(infoWindow, 'domready', function () {
                console.log('ready');
                console.log(isInfoWindowLoaded);
                if (!isInfoWindowLoaded) {
                    isInfoWindowLoaded = true;
                    ko.applyBindings(viewModel, document.getElementById('info-window'));
                }
                console.log(isInfoWindowLoaded);
            });
        }, (err) => {
            console.error(err);
        });

    },
    initMaps: function() {
        mapsPromise.then((google) => {
                const bp = new google.maps.LatLng(47.4979, 19.0402);
                const options = {
                    center: bp,
                    zoom: 15,
                    mapTypeControl: false
                };
                window.map = new google.maps.Map(mapEl, options);
                window.markers = [];

                const content = this.baseInfowindow();

                window.largeInfowindow = new google.maps.InfoWindow({content: this.baseInfowindow()});
                console.log(0);
                console.log(window.largeInfowindow.getContent());
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
                // set up event listener to center the map if window size changes
                google.maps.event.addDomListener(window, 'resize', this.centerMap);
            }, (err) => {
                mapEl.innerHTML = 'Something went wrong with Google Maps. Please check the console log.';
                console.error(err);
            }
        );
    },
    resize: function() {
        const map = window.map;
        if (map) {
            const center = map.getCenter();
            mapsPromise.then((google) => {
                const repeatResize = setInterval(function(){
                    google.maps.event.trigger(map, "resize");
                    map.panTo(center);
                }, 5);
                setTimeout(function(){
                    clearTimeout(repeatResize);
                }, 300);
            }, (err) => {
                mapEl.innerHTML = 'Something went wrong with Google Maps. Please check the console log.';
                console.error(err);
            });
        }
    },
    createMarker: function(viewModel, place) {
        mapsPromise.then((google) => {

            // helper functions
            function makeMarkerIcon(color) {
                const markerImage = new google.maps.MarkerImage(
                    'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|' +
                    color +
                    '|40|_|%E2%80%A2',
                    new google.maps.Size(21, 34),
                    new google.maps.Point(0, 0),
                    new google.maps.Point(10, 34),
                    new google.maps.Size(21,34)
                );
                return markerImage;
            }
            // Adding streetview to infowindow
            function processStreetView(data, status) {
                if (status === google.maps.StreetViewStatus.OK) {
                    const loc = data.location.latLng;
                    const heading = google.maps.geometry.spherical.computeHeading(
                        loc, viewModel.infoWindow.anchor.position
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
                    console.log(':(');
                }
            }

            // Setting up the infowindow
            function populateInfoWindow(selectedMarker, infowindow) {
                if (infowindow.marker !== selectedMarker) {
                    // infowindow.setContent(null);
                    const listItem = document.getElementById(selectedMarker.id);
                    let prevListItem;
                    if (infowindow.marker) {
                        prevListItem = document.getElementById(infowindow.marker.id);
                    }
                    // infowindow.setContent(content);
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
                    infowindow.open(viewModel.map, selectedMarker);

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
                }, 700);
            }

            const defaultIcon = makeMarkerIcon('d22626');
            const highlightedIcon = makeMarkerIcon('ff6464');
            const marker = new google.maps.Marker({
                position: place.position,
                map: viewModel.map,
                title: place.title,
                animation: google.maps.Animation.DROP,
                icon: defaultIcon,
                id: place.id
            });
            window.markers.push(marker);

            // add listeners
            marker.addListener('click', function() {
                console.log('click');
                viewModel.activePlace(place);
                populateInfoWindow(this, viewModel.infoWindow);
                markerBounce(this);
                console.log(viewModel.activePlace());
            });
            marker.addListener('mouseover', function() {
                this.setIcon(highlightedIcon);
            });
            marker.addListener('mouseout', function() {
                this.setIcon(defaultIcon);
            });

        },
        (err) => {
            mapEl.innerHTML = 'Something went wrong with Google Maps. Please check the console log.';
            console.error(err);
        });
    },
    centerMap: function() {
        mapsPromise.then((google) => {
            const map = window.map;
            const markers = window.markers;
            const bounds = new google.maps.LatLngBounds();
            let validCenter = false;
            markers.forEach((marker) => {
                if (marker.getVisible()) {
                    bounds.extend(marker.getPosition());
                    validCenter = true;
                }
            });
            //center the map to the geometric center of all markers
            if (validCenter) {
                map.panTo(bounds.getCenter());
                map.fitBounds(bounds);
            }
        },
        (err) => {
            mapEl.innerHTML = 'Something went wrong with Google Maps. Please check the console log.';
            console.error(err);
        });
    },
    filterMarkers: function(filteredMarkers) {
        const markers = window.markers;
        const filteredTitles = filteredMarkers.map((place) => place.title);
        if (markers) {
            markers.forEach((marker) => {
                if (filteredTitles.includes(marker.title)) {
                    if (!marker.getVisible()) marker.setVisible(true);
                } else {
                    marker.setVisible(false);
                };
            });
        }
    },
    selectMarker: function(place) {
        mapsPromise.then((google) => {
            const markers = window.markers;
            markers.forEach((marker) => {
                if (place.title === marker.title) {
                    google.maps.event.trigger(marker, 'click');
                }
            });
        },
        (err) => {
            mapEl.innerHTML = 'Something went wrong with Google Maps. Please check the console log.';
            console.error(err);
        });
    },
    addFsqData: function(data) {
        console.log(data);
        console.log('eh?');
    }
}


module.exports = gmaps;
const GoogleMapsLoader = require('google-maps'); // eslint-disable-line import/no-unresolved
const fsqAPI = require('node-foursquare-venues')('DAO3ODRAFGKNUOJPECEJWGWC1BYT4ILRO31PHCT5EE3U5EVT', 'BOU1F43LDLPMSOTT5PQT5CKV0NIOZGQPHISXIGX33WBJWWNW'); // eslint-disable-line import/no-unresolved

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
                // styles: styles,
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
            function processStreetView(data, status) {
                if (status === google.maps.StreetViewStatus.OK) {
                    const loc = data.location.latLng;
                    const heading = google.maps.geometry.spherical.computeHeading(
                        loc, this.largeInfowindow.anchor.position
                    );
                    this.largeInfowindow.setContent(
                        `<div id="info-title">
                            <span class="info-title">${this.largeInfowindow.anchor.title}</span>
                        </div>
                        <div class="flex-container flex-center">
                            <div id="pano"></div>
                            <div id="fsq"></div>
                        </div>`
                    );
                    const options = {
                        position: loc,
                        pov: {
                            heading: heading,
                            pitch: 25
                        },
                        disableDefaultUI: true
                    };
                    // eslint-disable-next-line no-unused-vars
                    const panorama = new google.maps.StreetViewPanorama(
                        document.getElementById('pano'), options
                    );
                } else {
                    this.largeInfowindow.setContent(
                        `<div id="info-title">
                            <span class="info-title">${this.largeInfowindow.anchor.title}</span>
                        </div>
                        <div id="fsq"></div>`
                    );
                }
            }
            function venueCallback(err, resp) {
                console.log(resp);
                if (!err) {
                    const venue = resp.response.venue;
                    const status = venue.hours ? venue.hours.status : '';
                    const rating = venue.rating;
                    const categories = venue.categories;
                    let category;
                    if (categories) {
                        category = categories[0].name;
                    }

                    const photos = venue.photos;
                    const photoCnt = (venue.photos.count > 3) ? 3 : venue.photos.count;
                    const imgContainer = document.createElement("div");
                    imgContainer.setAttribute("class", "flex-container flex-column");

                    for (let i = 0; i < photoCnt; i++) {
                        const photo = photos.groups[0].items[i];
                        const thumbUrl = `${photo.prefix}100x100${photo.suffix}`;
                        const origUrl = `${photo.prefix}original${photo.suffix}`;
                        const a = document.createElement("a");
                        a.setAttribute("href", origUrl);
                        a.setAttribute("target", "_blank");
                        a.setAttribute("class", "place-img-ele")
                        const photoEl = document.createElement("img");
                        photoEl.setAttribute("src", thumbUrl);
                        photoEl.setAttribute("alt", "Photo of place");
                        a.appendChild(photoEl);
                        imgContainer.appendChild(a);
                    }

                    const title = document.getElementById("info-title");
                    let newTitle = title.innerHTML;
                    if (category) {
                        newTitle += ` <span class="info"><strong>Type:</strong> ${category}</span>`;
                    }
                    if (status !== '') {
                        newTitle += ` <span class="info"><strong>Status:</strong> ${status}</span>`;
                    }
                    if (rating) {
                        newTitle += ` <span class="info"><strong>Rating:</strong> ${rating}/10</span>`;
                    }
                    title.innerHTML = newTitle;
                    const fsqEl = document.getElementById("fsq");
                    fsqEl.appendChild(imgContainer);
                    largeInfowindow.open(map);
                } else {
                    console.log('Something went wrong with Foursquare API.');
                }
            }
            function searchCallback(err, resp) {
                if (!err) {
                    const venues = resp.response.venues;
                    if (venues.length > 0) {
                        const venueID = resp.response.venues[0].id;
                        fsqAPI.venues.venue(venueID,venueCallback);
                    } else {
                        console.log('Foursquare result not available.');
                    }
                } else {
                    console.log('Something went wrong with Foursquare API.');
                }
            }
            function populateInfoWindow(selectedMarker, infowindow) {
                if (infowindow.marker !== selectedMarker) {
                    infowindow.setContent(selectedMarker.title);
                    infowindow.marker = selectedMarker;
                    const searchObj = {
                        ll: `${selectedMarker.position.lat()},${selectedMarker.position.lng()}`,
                        query: selectedMarker.title
                    };
                    fsqAPI.venues.search(searchObj, searchCallback)
                    infowindow.addListener('closeclick', function() {
                        infowindow.marker = null;
                    });

                    const SVService = new google.maps.StreetViewService();
                    const rad = 50;

                    // SVService.getPanoramaByLocation(selectedMarker.position, rad, processStreetView)
                    SVService.getPanorama({location: selectedMarker.position, radius: rad}, processStreetView)

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
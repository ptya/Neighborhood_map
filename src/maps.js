const GoogleMapsLoader = require('google-maps'); // eslint-disable-line import/no-unresolved
const fsq_api = require('node-foursquare-venues')('DAO3ODRAFGKNUOJPECEJWGWC1BYT4ILRO31PHCT5EE3U5EVT', 'BOU1F43LDLPMSOTT5PQT5CKV0NIOZGQPHISXIGX33WBJWWNW'); // eslint-disable-line import/no-unresolved

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
                    console.log(this.largeInfowindow);
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
                    console.log(':(');
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
                const venue = resp.response.venue;
                console.log(venue.name);
                const status = venue.hours ? venue.hours.status : '';
                console.log(status);
                const rating = venue.rating;
                console.log(rating);

                const photos = venue.photos;
                const photo_cnt = (venue.photos.count > 3) ? 3 : venue.photos.count;
                const imgContainer = document.createElement("div");
                imgContainer.setAttribute("class", "flex-container flex-column");

                for (let i = 0; i < photo_cnt; i++) {
                    const photo = photos.groups[0].items[i];
                    console.log(photo);
                    const thumbUrl = `${photo.prefix}100x100${photo.suffix}`;
                    const origUrl = `${photo.prefix}original${photo.suffix}`;
                    console.log(thumbUrl);
                    const a = document.createElement("a");
                    a.setAttribute("href", origUrl);
                    a.setAttribute("target", "_blank");
                    const photoEl = document.createElement("img");
                    photoEl.setAttribute("src", thumbUrl);
                    photoEl.setAttribute("alt", "Photo of place");
                    photoEl.setAttribute("class", "place-img-ele");
                    a.appendChild(photoEl);
                    imgContainer.appendChild(a);

                }

                const title = document.getElementById("info-title");
                let newTitle = title.innerHTML;
                newTitle += ` <span style="info-status">(${status})</span>`;
                title.innerHTML = newTitle;

                const fsq_el = document.getElementById("fsq");
                fsq_el.appendChild(imgContainer);
                largeInfowindow.open(map);
            }
            function searchCallback(err, resp) {
                console.log(resp);
                const venueID = resp.response.venues[0].id;
                fsq_api.venues.venue(venueID,venueCallback);
            }
            function populateInfoWindow(selectedMarker, infowindow) {
                if (infowindow.marker !== selectedMarker) {
                    infowindow.setContent(selectedMarker.title);
                    infowindow.marker = selectedMarker;
                    console.log(selectedMarker);
                    console.log(selectedMarker.position.lat());
                    console.log(selectedMarker.position.lng());
                    const searchObj = {
                        ll: `${selectedMarker.position.lat()},${selectedMarker.position.lng()}`,
                        query: selectedMarker.title
                    };
                    fsq_api.venues.search(searchObj, searchCallback)
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
    }
}


module.exports = gmaps;
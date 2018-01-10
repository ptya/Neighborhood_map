const GoogleMapsApiLoader = require("google-maps-api-loader"); // eslint-disable-line import/no-unresolved
const ko = require("../../dist/lib/knockout/knockout-3.4.2");

const mapEl = document.getElementById("map-canvas");
const mapsPromise = GoogleMapsApiLoader({
  libraries: ["geometry", "places"],
  apiKey: "AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU",
  language: "EN"
}).then(
  google => google,
  err => {
    mapEl.innerHTML =
      "Something went wrong with Google Maps. Please check the console log.";
    console.error(err);
  }
);

const gmaps = {
  mapPromise: mapsPromise,
  mapInit: function() {
    mapsPromise.then(
      google => {
        const bp = new google.maps.LatLng(47.4979, 19.0402);
        const options = {
          center: bp,
          zoom: 15,
          mapTypeControl: false
        };
        const map = new google.maps.Map(mapEl, options);
        // set up event listener to auto-zoom if bounds change
        google.maps.event.addListener(map, "bounds_changed", function() {
          let zoom = map.getZoom();
          // set minimum zoom level
          if (zoom > 16) {
            map.setZoom(16);
          } else {
            map.setZoom(zoom);
          }
        });
        // set up event listener to center the map if window size changes
        google.maps.event.addDomListener(window, "resize", () => {
          this.resize();
        });
        window.map = map;
        window.markers = [];
      },
      err => {
        console.error(err);
      }
    );
  },
  infoWindowHTML: function() {
    let infoWindowHTML = '<div id="info-window">';
    infoWindowHTML += '<div id="info-title" data-bind="with: activePlace">';
    infoWindowHTML += '<h2 class="info-title" data-bind="text: title"></h2>';
    infoWindowHTML += '<div data-bind="html: fsqStatus"></div>';
    infoWindowHTML += "</div>";
    infoWindowHTML += '<div class="flex-container flex-center">';
    infoWindowHTML += '<div id="pano"></div>';
    infoWindowHTML +=
      '<div id="fsq" class="flex-container flex-column" data-bind="with: activePlace">';
    infoWindowHTML += '<div data-bind="foreach: fsqImages">';
    infoWindowHTML += '<a class="place-img-ele" href="#" >';
    infoWindowHTML +=
      '<img alt="Photo of place" data-bind="attr: {src: thumbSrc}, click: $root.openModal">';
    infoWindowHTML += "</a>";
    infoWindowHTML += "</div>";
    infoWindowHTML += "</div>";
    infoWindowHTML += "</div>";
    infoWindowHTML += "</div>";
    return infoWindowHTML;
  },
  infoWindowInit: function(viewModel) {
    let infoWindowHTML = this.infoWindowHTML();

    let infoWindow;
    window.isInfoWindowLoaded = false;

    mapsPromise.then(
      google => {
        infoWindow = new google.maps.InfoWindow({
          content: infoWindowHTML
        });
        window.infoWindow = infoWindow;
        /*
        * When the info window opens, bind it to Knockout.
        */
        google.maps.event.addListener(infoWindow, "domready", function() {
          const infoWindowEl = document.getElementById("info-window");
          ko.applyBindings(viewModel, infoWindowEl);
        });
      },
      err => {
        console.error(err);
      }
    );
  },
  createMarker: function(viewModel, place) {
    mapsPromise.then(
      google => {
        const map = window.map;
        const infoWindowHTML = this.infoWindowHTML();

        function makeMarkerIcon(color) {
          const markerImage = new google.maps.MarkerImage(
            "http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|" +
              color +
              "|40|_|%E2%80%A2",
            new google.maps.Size(21, 34),
            new google.maps.Point(0, 0),
            new google.maps.Point(10, 34),
            new google.maps.Size(21, 34)
          );
          return markerImage;
        }

        // Adding streetview to infowindow
        function processStreetView(data, status) {
          if (status === google.maps.StreetViewStatus.OK) {
            const loc = data.location.latLng;
            const heading = google.maps.geometry.spherical.computeHeading(
              loc,
              window.infoWindow.anchor.position
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
              document.getElementById("pano"),
              options
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
            console.log("Street View data not found for this location.");
          }
        }

        // Setting up the infowindow
        function populateInfoWindow(selectedMarker, infowindow) {
          if (infowindow.marker !== selectedMarker) {
            infowindow.setContent(infoWindowHTML);

            const listItem = document.getElementById(selectedMarker.id);
            let prevListItem;
            if (infowindow.marker) {
              prevListItem = document.getElementById(infowindow.marker.id);
            }
            infowindow.marker = selectedMarker;

            // Setup streetview
            const SVService = new google.maps.StreetViewService();
            const rad = 50;
            SVService.getPanorama(
              { location: selectedMarker.position, radius: rad },
              processStreetView
            );

            infowindow.open(map, selectedMarker);

            // make the item active in the list
            listItem.classList.toggle("active");
            if (prevListItem) {
              prevListItem.classList.toggle("active");
            }

            infowindow.addListener("closeclick", function() {
              if (infowindow.marker) {
                const currentItem = document.getElementById(
                  infowindow.marker.id
                );
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

        const defaultIcon = makeMarkerIcon("d22626");
        const highlightedIcon = makeMarkerIcon("ff6464");
        const marker = new google.maps.Marker({
          position: place.position,
          map: map,
          title: place.title,
          animation: google.maps.Animation.DROP,
          icon: defaultIcon,
          id: place.id
        });
        window.markers.push(marker);

        marker.addListener("click", function() {
          viewModel.openPlace(place);
          /*
          * Need to check if screen size is wide enough
          * If not there needs to be some delay to fully render
          */
          const smallSize = viewModel.checkSize();
          if (smallSize) {
            setTimeout(() => {
              populateInfoWindow(this, window.infoWindow);
              markerBounce(this);
            }, 300);
          } else {
            populateInfoWindow(this, window.infoWindow);
            markerBounce(this);
          }
        });
        marker.addListener("mouseover", function() {
          this.setIcon(highlightedIcon);
        });
        marker.addListener("mouseout", function() {
          this.setIcon(defaultIcon);
        });

        // to avoid zooming onto the first marker created
        this.centerMap();
      },
      err => {
        mapEl.innerHTML =
          "Something went wrong with Google Maps. Please check the console log.";
        console.error(err);
      }
    );
  },
  centerMap: function() {
    mapsPromise.then(
      google => {
        const map = window.map;
        const markers = window.markers;
        const bounds = new google.maps.LatLngBounds();
        let validCenter = false;
        markers.forEach(marker => {
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
      err => {
        mapEl.innerHTML =
          "Something went wrong with Google Maps. Please check the console log.";
        console.error(err);
      }
    );
  },
  resize: function() {
    const map = window.map;
    if (map) {
      const center = map.getCenter();
      mapsPromise.then(
        google => {
          const repeatResize = setInterval(function() {
            google.maps.event.trigger(map, "resize");
            map.panTo(center);
          }, 5);
          setTimeout(function() {
            clearTimeout(repeatResize);
          }, 300);
        },
        err => {
          mapEl.innerHTML =
            "Something went wrong with Google Maps. Please check the console log.";
          console.error(err);
        }
      );
    }
  },
  filterMarkers: function(filteredMarkers) {
    const markers = window.markers;
    const filteredTitles = filteredMarkers.map(place => place.title);
    if (markers) {
      markers.forEach(marker => {
        if (filteredTitles.includes(marker.title)) {
          if (!marker.getVisible()) marker.setVisible(true);
        } else {
          marker.setVisible(false);
        }
      });
    }
  },
  selectMarker: function(place) {
    mapsPromise.then(
      google => {
        const markers = window.markers;
        markers.forEach(marker => {
          if (place.title === marker.title) {
            google.maps.event.trigger(marker, "click");
          }
        });
      },
      err => {
        mapEl.innerHTML =
          "Something went wrong with Google Maps. Please check the console log.";
        console.error(err);
      }
    );
  }
};

module.exports = gmaps;

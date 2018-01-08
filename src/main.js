const gmaps = require('./modules/maps');
const ko = require('../lib/knockout/knockout-3.4.2');
const media = require('./modules/media');
const modal = require('./modules/modal');
const moveMenu = require('./modules/menu');
const Place = require('./models/Place');
const places = require('./data/places');
const fsqAPI = require('node-foursquare-venues')('DAO3ODRAFGKNUOJPECEJWGWC1BYT4ILRO31PHCT5EE3U5EVT', 'BOU1F43LDLPMSOTT5PQT5CKV0NIOZGQPHISXIGX33WBJWWNW'); // eslint-disable-line import/no-unresolved
const _ = require('underscore'); // eslint-disable-line import/no-unresolved

const ViewModel = function() {
    // Init functions
    let map;
    this.infoWindow;
    // let infoWindow;
    modal.init();
    media.init();
    gmaps.mapInit(this);
    gmaps.infoWindowInit(this);
    // gmaps.initMaps();
    // let mapsLoaded = new Promise((res, rej) => {

    // });

    // foursquare functions
    this.grabFsqData = function(place) {
        function updatePlace(data) {
            /*
            * data[0] = fsqStatus
            * data[1] = fsqImages
            */
            const status = data[0];
            const images = data[1];
            place.updateFsqStatus(status);
            place.updateFsqImages(images);
        }
        function venueCallback(err, resp) {
            if (!err) {
                // Grab info of the place
                const venue = resp.response.venue;
                const status = venue.hours ? venue.hours.status : '';
                const rating = venue.rating;
                const categories = venue.categories;
                let category;
                if (categories) {
                    category = categories[0].name;
                }

                // Grab max 3 pictures of the place
                const photos = venue.photos;
                const photoCnt = (venue.photos.count > 3) ? 3 : venue.photos.count;
                let fsqImages = [];
                if (photoCnt === 0) {
                    fsqImages = null;
                }
                for (let i = 0; i < photoCnt; i++) {
                    const photo = photos.groups[0].items[i];
                    const thumbUrl = `${photo.prefix}100x100${photo.suffix}`;
                    const origUrl = `${photo.prefix}original${photo.suffix}`;
                    fsqImages.push({thumbSrc: thumbUrl, origSrc: origUrl});
                }
                let fsqStatus = '';
                if (category) {
                    fsqStatus += `<span class="info"><strong>Type:</strong> ${category}</span>`;
                }
                if (status !== '') {
                    fsqStatus += `<span class="info"><strong>Status:</strong> ${status}</span>`;
                }
                if (rating) {
                    fsqStatus += `<span class="info"><strong>Rating:</strong> ${rating}</span>`;
                }

                /* TODO */
                // resize the map if infowindow does not fit
                // window.largeInfowindow.open(window.map);
                // const infowindowContent = window.largeInfowindow.getContent();
                // console.log(window.largeInfowindow.getContent());
                // window.largeInfowindow.setContent(infowindowEl);

                updatePlace([fsqStatus, fsqImages]);
            } else {
                console.log('Something went wrong with Foursquare API.');
            }
        }

        function searchCallback(err, resp) {
            if (!err) {
                const venues = resp.response.venues;
                if (venues.length > 0) {
                    const venueID = resp.response.venues[0].id;
                    const fsqResp = fsqAPI.venues.venue(venueID, venueCallback);
                } else {
                    console.log('Foursquare result not available.');
                }
            } else {
                console.log('Something went wrong with Foursquare API.');
            }
        }

        const searchObj = {
            ll: `${place.position.lat},${place.position.lng}`,
            query: place.title
        };
        fsqAPI.venues.search(searchObj, searchCallback);
    }

    // Grab required elements
    const menuIco = document.getElementById('menu-bar');
    const menuClose = document.getElementById('menu-close');
    const input = document.getElementById("filter-locations-text")

    // Create places once maps is loaded
    this.placesList = ko.observableArray();
    gmaps.mapPromise.then(() => {
        places.forEach((place) => {
            const placeItem = new Place(place);
            gmaps.createMarker(this, placeItem);
            this.placesList.push(placeItem);
            // Collect foursquare information in advance
            this.grabFsqData(placeItem);
        });
    })

    // Set up KO observables
    this.title = ko.observable('Cool Locations');
    this.filterInput = ko.observable();
    this.activePlace = ko.observable();
    this.previousList = [];
    this.markerList = ko.computed(() => {
        let filteredList = (this.filterInput() == null) ?
            this.placesList() : this.placesList().filter((place) => {
                return place.title.toLowerCase()
                    .includes(this.filterInput().toLowerCase());
            });
        if (!_.isEqual(filteredList, this.previousList)) {
            gmaps.filterMarkers(filteredList);
            gmaps.centerMap();
            this.previousList = filteredList;
        }
        return filteredList;
    });
    this.fsqImages = ko.observableArray();
    this.fsqImages([
        {thumbSrc: 'http://via.placeholder.com/100x100', origSrc: 'http://via.placeholder.com/400x400'},
        {thumbSrc: 'http://via.placeholder.com/100x100', origSrc: 'http://via.placeholder.com/400x400'},
        {thumbSrc: 'http://via.placeholder.com/100x100', origSrc: 'http://via.placeholder.com/400x400'}
    ]);

    this.openModal = (imgSrcs) => {
        console.log(imgSrcs.origSrc);
    }

    // Clicking on a list item
    this.clickPlace = (place) => {
        if(media.smallSize.matches) {
            media.closedMenu();
            setTimeout(() => {
                gmaps.selectMarker(place);
            }, 300);
        } else {
            gmaps.selectMarker(place);
        }
    };

    // Hitting enter on the filter
    this.enterPlace = () => {
        if (this.filterInput()) {
            gmaps.selectMarker(this.markerList()[0]);
        }
    };

    this.updateModal = (src) => {

    }

    setInterval(function(){
        console.log('>>');
        console.log(this.infoWindow);
        console.log('<<');
    }, 5000);

    // Add listeners
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) this.enterPlace()
    });
    menuIco.addEventListener('click', moveMenu);
    menuClose.addEventListener('click', moveMenu);
};

const InfowindowViewModel = function() {
    this.proba = ko.observable('No ez működik');
}

ko.applyBindings(new ViewModel());

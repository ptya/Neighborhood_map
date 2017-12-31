const gmaps = require('./modules/maps');
const ko = require('../lib/knockout/knockout-3.4.2');
const media = require('./modules/media');
const modal = require('./modules/modal');
const moveMenu = require('./modules/menu');
const Place = require('./models/Place');
const places = require('./data/places');
const _ = require('underscore'); // eslint-disable-line import/no-unresolved

const ViewModel = function() {
    // Init functions
    let map;
    let infoWindow;
    modal.init();
    media.init();
    gmaps.mapInit(this);
    gmaps.infoWindowInit(this);
    // gmaps.initMaps();
    // let mapsLoaded = new Promise((res, rej) => {

    // });

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
    // this.fsqImages([{thumbSrc: 'http://hello.hu', origSrc: 'http://hallo.hu'}]);

    this.openModal = (src) => {
        console.log(src);
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

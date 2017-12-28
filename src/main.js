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
    modal.init();
    media.init();
    gmaps.initMaps();

    // Grab required elements
    const menuIco = document.getElementById('menu-bar');
    const menuClose = document.getElementById('menu-close');
    const input = document.getElementById("filter-locations-text")

    // Create places
    const placesList = [];
    places.forEach((place) => {
        const placeItem = new Place(place);
        gmaps.createMarker(placeItem);
        placesList.push(placeItem);
    });

    // Set up KO observables
    this.title = ko.observable('Cool Locations');
    this.filterInput = ko.observable();
    this.activePlace = ko.observable();
    this.previousList = [];
    this.markerList = ko.computed(() => {
        let filteredList = (this.filterInput() == null) ?
            placesList : placesList.filter((place) => {
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

    // Add listeners
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) this.enterPlace()
    });
    menuIco.addEventListener('click', moveMenu);
    menuClose.addEventListener('click', moveMenu);
};

ko.applyBindings(new ViewModel());
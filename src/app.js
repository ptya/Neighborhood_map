const ko = require('../lib/knockout/knockout-3.4.2');
const gmaps = require('./maps');
const _ = require('underscore'); // eslint-disable-line import/no-unresolved
const modal = require('./modal');

/*
Download the Knockout framework. Knockout must be used to handle the list, filter, and any other information on the page that is subject to changing state.
Things that should not be handled by Knockout:
- anything the Maps API is used for,
- creating markers,
- tracking click events on markers,
- making the map,
- refreshing the map.

Note 1: Tracking click events on list items should be handled with Knockout.
Note 2: Creating your markers as a part of your ViewModel is allowed (and recommended). Creating them as Knockout observables is not.
*/

const menuIco = document.getElementById('menu-bar');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');
const title = document.getElementById('title');
const input = document.getElementById("filter-locations-text")

function moveMenu() {
    gmaps.resize();
    menu.classList.toggle('hidden-menu');
    if (menuClose.classList.contains('fade-out')) {
        setTimeout(function() {
            menuClose.classList.toggle('fade-out');
            menuClose.classList.toggle('fade-in');
        }, 400);
    } else {
        menuClose.classList.toggle('fade-out');
        menuClose.classList.toggle('fade-in');
    }
    if (menuIco.classList.contains('fade-out')) {
        setTimeout(function() {
            menuIco.classList.toggle('fade-out');
            menuIco.classList.toggle('fade-in');
        }, 400);
        setTimeout(function() {
            title.classList.toggle('fade-out');
            title.classList.toggle('fade-in');
            title.classList.toggle('move-title');
        }, 600);
    } else {
        menuIco.classList.toggle('fade-out');
        menuIco.classList.toggle('fade-in');
        title.classList.toggle('fade-out');
        title.classList.toggle('fade-in');
        title.classList.toggle('move-title');
    }
}

menuIco.addEventListener('click', moveMenu);
menuClose.addEventListener('click', moveMenu);

/* Hanlding the modal */
modal.init();

// media query change
function closedMenu() {
    menu.classList.add('hidden-menu');
    menuClose.classList.add('fade-out');
    menuClose.classList.remove('fade-in');
    menuIco.classList.add('fade-in');
    menuIco.classList.remove('fade-out');
    title.classList.add('fade-in');
    title.classList.add('move-title');
    title.classList.remove('fade-out');
    gmaps.resize();
}

function openedMenu() {
    menu.classList.remove('hidden-menu');
    menuClose.classList.remove('fade-out');
    menuClose.classList.add('fade-in');
    menuIco.classList.remove('fade-in');
    menuIco.classList.add('fade-out');
    title.classList.remove('fade-in');
    title.classList.remove('move-title');
    title.classList.add('fade-out');
    gmaps.resize();
}

/* Check for media size */
let smallSize;
if (matchMedia) {
    const mq = window.matchMedia("(max-width: 1024px)");
    smallSize = window.matchMedia('(max-width: 700px)');
    mq.addListener(WidthChange);
    WidthChange(mq);
}

function WidthChange(mq) {
    if (mq.matches) {
        console.log('window width is at least 1024px');
        closedMenu();
    } else {
      console.log('window width is more than 1024px');
      openedMenu();
    }
}
/* knockout test here */
const Place = require('./models/Place');
const places = require('./data/places');

window.ViewModel = function() {
    gmaps.initMaps();
    const placesList = [];
    places.forEach((place) => {
        const placeItem = new Place(place);
        gmaps.createMarker(placeItem);
        placesList.push(placeItem);
    });

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

    this.clickPlace = (place) => {
        if(smallSize.matches) {
            closedMenu();
            setTimeout(() => {
                gmaps.selectMarker(place);
            }, 300);
        } else {
            gmaps.selectMarker(place);
        }
    };

    this.enterPlace = () => {
        if (this.filterInput()) {
            gmaps.selectMarker(this.markerList()[0]);
        }
    };
    input.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) this.enterPlace()
    });
};

/*
Multiple viewmodels:
If they all need to be on the same page, one easy way to do this is to have a master view model containing an array (or property list)
of the other view models.

masterVM = {
    vmA : new VmA(),
    vmB : new VmB(),
    vmC : new VmC(),
}
*/
ko.applyBindings(new window.ViewModel());
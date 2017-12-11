const ko = require('../lib/knockout/knockout-3.4.2');
const gmaps = require('./maps');

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

function moveMenu() {
    gmaps.Gmaps.resize();
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

gmaps.Gmaps.initMaps();

/* knockout test here */
const Place = require('./models/place');
const places = require('./data/places');

const ViewModel = function() {
    this.filterInput = ko.observable()

    this.markerList = ko.computed(() => {
        let list = [];
        let filteredList = (this.filterInput() == null) ?
            places : places.filter((place) => {
                return place.title.includes(this.filterInput());
            });
        filteredList.forEach((placeItem) => {
            list.push(new Place(placeItem));
        });

        return list;
    });

    this.clickMarker = (marker) => {
        console.log(marker.title());
    };
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
ko.applyBindings(new ViewModel());
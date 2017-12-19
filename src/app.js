const ko = require('../lib/knockout/knockout-3.4.2');
const gmaps = require('./maps');
const _ = require('underscore'); // eslint-disable-line import/no-unresolved
const fsq = require('node-foursquare-venues')('DAO3ODRAFGKNUOJPECEJWGWC1BYT4ILRO31PHCT5EE3U5EVT', 'BOU1F43LDLPMSOTT5PQT5CKV0NIOZGQPHISXIGX33WBJWWNW'); // eslint-disable-line import/no-unresolved

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


/* knockout test here */
const Place = require('./models/Place');
const places = require('./data/places');

const ViewModel = function() {
    gmaps.initMaps();
    const placesList = [];
    places.forEach((place) => {
        const placeItem = new Place(place);
        gmaps.createMarker(placeItem);
        placesList.push(placeItem);
    });

    this.filterInput = ko.observable()
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
        console.log(place.title());
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

const infoObj = {venue_id: '51aa67da498ef9ce6a081be2'};
fsq.venues.venue('51aa67da498ef9ce6a081be2', fsqCallback);

function fsqCallback(err, resp) {
    console.log(resp);
    const venue = resp.response.venue;
    const status = venue.hours.status;
    console.log(status);
    const rating = venue.rating;
    console.log(rating);
    const photos = venue.photos;
    const photo_cnt = (venue.photos.count > 3) ? 3 : venue.photos.count;
    for (let i = 0; i < photo_cnt; i++) {
        const photo = photos.groups[0].items[i];
        console.log(photo);
        const url = `${photo.prefix}200x200${photo.suffix}`;
        console.log(url);
    }
}
const GoogleMapsLoader = require('google-maps');

let myMap;
function passMap(map) {
    console.log('im in passmap');
    myMap = map;
    console.log(myMap);
}

const gmaps = {
    initMaps: function() {
        GoogleMapsLoader.KEY = 'AIzaSyBtVhYYcioALZwMFZfDwCChRMOLT05sxUU';
        GoogleMapsLoader.LIBRARIES = ['geometry', 'places'];

        const mapEl = document.getElementById('map-canvas');
        const options = {
            center: {lat: 47.497, lng: 19.040},
            zoom: 15,
            // styles: styles,
            mapTypeControl: false
        };
        let map = 'init';
        GoogleMapsLoader.load(function(google) {
            const newMap = new google.maps.Map(mapEl, options);
            console.log(mapEl);
            console.log(map);
            passMap(newMap);
            console.log(map);
        });
        console.log(map);
    },
    resize: function() {
        console.log("I'm in resize");
        console.log(map);
        GoogleMapsLoader.load(function(google) {
            console.log("I'm in load");
            google.maps.event.trigger(google.maps.Map, "resize");
            console.log("Exiting load");
        });
    },
    getMap: function(map) {
        this.map = map;
    }
}


console.log('this is myMap: ' + myMap);

module.exports = {
    Gmaps: gmaps,
    MyMap: myMap
};
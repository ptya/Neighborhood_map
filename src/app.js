const ko = require('../lib/knockout/knockout-3.4.2');
const gmaps = require('./maps.js');


const menuIco = document.getElementById('menu-bar');
const menu = document.getElementById('menu');

const myMap = gmaps.Gmaps.initMaps();
console.log('this is app.js ' + myMap);

function moveMenu() {
    menu.classList.toggle('hidden-menu');
    gmaps.Gmaps.resize();
}

this.aMap = gmaps.MyMap;

window.helloManki = function() {
    console.log('Hellooo Monkeeey!');
}

menuIco.addEventListener('click', moveMenu);
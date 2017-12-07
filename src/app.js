const ko = require('../lib/knockout/knockout-3.4.2');
const gmaps = require('./maps.js');


const menuIco = document.getElementById('menu-bar');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');
const title = document.getElementById('title');

const myMap = gmaps.Gmaps.initMaps();
console.log('this is app.js ' + myMap);

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

this.aMap = gmaps.MyMap;

window.helloManki = function() {
    console.log('Hellooo Monkeeey!');
}

menuIco.addEventListener('click', moveMenu);
menuClose.addEventListener('click', moveMenu);
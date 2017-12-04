const ko = require('../lib/knockout/knockout-3.4.2');
const maps = require('./maps.js');

const menuIco = document.getElementById('menu-bar');
const menu = document.getElementById('menu');

function moveMenu(e) {
    console.log(e);
    menu.classList.toggle('move-left');
}

menuIco.addEventListener('click', moveMenu);

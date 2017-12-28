const gmaps = require('./maps');

const menuIco = document.getElementById('menu-bar');
const menuClose = document.getElementById('menu-close');
const menu = document.getElementById('menu');
const title = document.getElementById('title');

const media = {
    closedMenu: function() {
        menu.classList.add('hidden-menu');
        menuClose.classList.add('fade-out');
        menuClose.classList.remove('fade-in');
        menuIco.classList.add('fade-in');
        menuIco.classList.remove('fade-out');
        title.classList.add('fade-in');
        title.classList.add('move-title');
        title.classList.remove('fade-out');
        gmaps.resize();
    },
    openedMenu: function() {
        menu.classList.remove('hidden-menu');
        menuClose.classList.remove('fade-out');
        menuClose.classList.add('fade-in');
        menuIco.classList.remove('fade-in');
        menuIco.classList.add('fade-out');
        title.classList.remove('fade-in');
        title.classList.remove('move-title');
        title.classList.add('fade-out');
        gmaps.resize();
    },
    smallSize: null,
    init: function() {
        function WidthChange(mq) {
            if (mq.matches) {
                this.closedMenu;
            } else {
                this.openedMenu;
            }
        }

        // let smallSize;
        if (matchMedia) {
            const mq = window.matchMedia("(max-width: 1024px)");
            this.smallSize = window.matchMedia('(max-width: 700px)');
            mq.addListener(WidthChange);
            this.smallSize.addListener(WidthChange);
            WidthChange(mq);
            WidthChange(this.smallSize);
        }
    }
}

module.exports = media;
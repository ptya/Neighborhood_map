const fsqAPI = require('node-foursquare-venues')('DAO3ODRAFGKNUOJPECEJWGWC1BYT4ILRO31PHCT5EE3U5EVT', 'BOU1F43LDLPMSOTT5PQT5CKV0NIOZGQPHISXIGX33WBJWWNW'); // eslint-disable-line import/no-unresolved
const modal = require('./modal');

function venueCallback(err, resp) {
    if (!err) {
        // Grab info of the place
        const venue = resp.response.venue;
        const status = venue.hours ? venue.hours.status : '';
        const rating = venue.rating;
        const categories = venue.categories;
        let category;
        if (categories) {
            category = categories[0].name;
        }

        // Grab max 3 pictures of the place
        const photos = venue.photos;
        const photoCnt = (venue.photos.count > 3) ? 3 : venue.photos.count;
        let fsqImages = [];
        if (photoCnt === 0) {
            fsqImages = null;
        }
        for (let i = 0; i < photoCnt; i++) {
            const photo = photos.groups[0].items[i];
            const thumbUrl = `${photo.prefix}100x100${photo.suffix}`;
            const origUrl = `${photo.prefix}original${photo.suffix}`;
            fsqImages.push({thumbSrc: thumbUrl, origSrc: origUrl});
        }
        let fsqStatus = document.createElement('div');
        if (category) {
            const infoSpan = document.createElement('span');
            infoSpan.setAttribute('class', 'info');
            infoSpan.innerHTML = `<strong>Type:</strong> ${category}`;
            fsqStatus.appendChild(infoSpan);
        }
        if (status !== '') {
            const statusSpan = document.createElement('span');
            statusSpan.setAttribute('class', 'info');
            statusSpan.innerHTML = `<strong>Status:</strong> ${status}`;
            fsqStatus.appendChild(statusSpan);
        }
        if (rating) {
            const ratingSpan = document.createElement('span');
            ratingSpan.setAttribute('class', 'info');
            ratingSpan.innerHTML = `<strong>Rating:</strong> ${rating}`;
            fsqStatus.appendChild(ratingSpan);
        }

        /* TODO */
        // resize the map if infowindow does not fit
        // window.largeInfowindow.open(window.map);
        // const infowindowContent = window.largeInfowindow.getContent();
        // console.log(window.largeInfowindow.getContent());
        // window.largeInfowindow.setContent(infowindowEl);

        return [fsqStatus, fsqImages];

    } else {
        console.log('Something went wrong with Foursquare API.');
    }

}

function searchCallback(err, resp) {
    if (!err) {
        const venues = resp.response.venues;
        if (venues.length > 0) {
            const venueID = resp.response.venues[0].id;
            const fsqResp = fsqAPI.venues.venue(venueID, venueCallback);
        } else {
            console.log('Foursquare result not available.');
        }
    } else {
        console.log('Something went wrong with Foursquare API.');
    }
}

const fsq = {
    search: function(searchObj) {
        fsqAPI.venues.search(searchObj, searchCallback);
    }
}

module.exports = fsq;
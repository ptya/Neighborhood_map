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
        const imgContainer = document.createElement("div");
        imgContainer.setAttribute("class", "flex-container flex-column");
        for (let i = 0; i < photoCnt; i++) {
            const photo = photos.groups[0].items[i];
            const thumbUrl = `${photo.prefix}100x100${photo.suffix}`;
            const origUrl = `${photo.prefix}original${photo.suffix}`;
            const a = document.createElement("a");
            a.setAttribute("class", "place-img-ele")
            const photoEl = document.createElement("img");
            photoEl.setAttribute("src", thumbUrl);
            photoEl.setAttribute("alt", "Photo of place");
            a.appendChild(photoEl);
            imgContainer.appendChild(a);
            a.addEventListener('click', function() {
                modal.updateModal(origUrl)
            });
        }

        // Extend the title with available info
        const title = document.getElementById("info-title");
        let newTitle = title.innerHTML;
        if (category) {
            newTitle += ` <span class="info"><strong>Type:</strong> ${category}</span>`;
        }
        if (status !== '') {
            newTitle += ` <span class="info"><strong>Status:</strong> ${status}</span>`;
        }
        if (rating) {
            newTitle += ` <span class="info"><strong>Rating:</strong> ${rating}/10</span>`;
        }
        title.innerHTML = newTitle;

        const fsqEl = document.getElementById("fsq");
        fsqEl.appendChild(imgContainer);

        // resize the map if infowindow does not fit
        window.largeInfowindow.open(window.map);
    } else {
        console.log('Something went wrong with Foursquare API.');
    }
}

function searchCallback(err, resp) {
    if (!err) {
        const venues = resp.response.venues;
        if (venues.length > 0) {
            const venueID = resp.response.venues[0].id;
            fsqAPI.venues.venue(venueID, venueCallback);
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
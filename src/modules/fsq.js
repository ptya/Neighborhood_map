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
        // const imgContainer = document.createElement("div");
        // imgContainer.setAttribute("class", "flex-container flex-column");
        let imgHTML = '<div class="flex-container flex-column">';
        if (photoCnt === 0) {
            imgHTML += 'No photos found for this place.';
        }
        for (let i = 0; i < photoCnt; i++) {
            const photo = photos.groups[0].items[i];
            const thumbUrl = `${photo.prefix}100x100${photo.suffix}`;
            const origUrl = `${photo.prefix}original${photo.suffix}`;
            imgHTML += '<a class="place-img-ele">';
            imgHTML += `<img src="${thumbUrl}" alt="Photo of place #${i+1}">`;
            imgHTML += '</a>';
            // const a = document.createElement("a");
            // a.setAttribute("class", "place-img-ele")
            // const photoEl = document.createElement("img");
            // photoEl.setAttribute("src", thumbUrl);
            // photoEl.setAttribute("alt", "Photo of place");
            // a.appendChild(photoEl);
            // imgContainer.appendChild(a);

            /*
            // MODAL UPDATE REQUIRED -- NEW VIEWMODEL //
            */
            // a.addEventListener('click', function() {
            //     modal.updateModal(origUrl)
            // });
        }
        imgHTML += '</div>'

        // Extend the title with available info
        // const title = document.getElementById("info-title");
        // let newTitle = title.innerHTML;
        let titleHTML = '';
        if (category) {
            // newTitle += ` <span class="info"><strong>Type:</strong> ${category}</span>`;
            titleHTML += ` <span class="info"><strong>Type:</strong> ${category}</span>`;
        }
        if (status !== '') {
            // newTitle += ` <span class="info"><strong>Status:</strong> ${status}</span>`;
            titleHTML += ` <span class="info"><strong>Status:</strong> ${status}</span>`;
        }
        if (rating) {
            // newTitle += ` <span class="info"><strong>Rating:</strong> ${rating}/10</span>`;
            titleHTML += ` <span class="info"><strong>Rating:</strong> ${rating}/10</span>`;
        }
        // title.innerHTML = newTitle;

        // const fsqEl = document.getElementById("fsq");
        // fsqEl.appendChild(imgContainer);

        /* TODO */
        // resize the map if infowindow does not fit
        // window.largeInfowindow.open(window.map);
        const infowindowContent = window.largeInfowindow.getContent();
        console.log(window.largeInfowindow.getContent());





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
            console.log(fsqResp);
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
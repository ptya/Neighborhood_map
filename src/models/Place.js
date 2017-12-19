const Place = function (data) {
    this.title = data.title;
    this.position = data.position;
    this.place_id = data.place_id;
    this.fsq_id = data.fsq_id;
};

module.exports = Place;
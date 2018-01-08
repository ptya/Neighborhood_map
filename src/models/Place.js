const Place = function (data) {
    this.id = data.id;
    this.title = data.title;
    this.position = data.position;
    this.placeID = data.placeID;
    this.fsqID = data.fsqID;
    // this.fsqImgs = [
    //     {thumbSrc: 'http://via.placeholder.com/100x100', origSrc: 'http://via.placeholder.com/400x400'},
    //     {thumbSrc: 'http://via.placeholder.com/100x100', origSrc: 'http://via.placeholder.com/400x400'},
    //     {thumbSrc: 'http://via.placeholder.com/100x100', origSrc: 'http://via.placeholder.com/400x400'}
    // ];
    this.fsqImages = [];
    this.fsqStatus = null;

    this.updateFsqImages = function(fsqImgData) {
        this.fsqImages = fsqImgData;
    }

    this.updateFsqStatus = function(fsqStatusData) {
        this.fsqStatus = fsqStatusData;
    }
};

module.exports = Place;
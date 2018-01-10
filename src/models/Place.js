const Place = function(data) {
  this.id = data.id;
  this.title = data.title;
  this.position = data.position;
  this.placeID = data.placeID;
  this.fsqID = data.fsqID;
  this.fsqImages = [];
  this.fsqStatus = null;

  this.updateFsqImages = function(fsqImgData) {
    this.fsqImages = fsqImgData;
  };

  this.updateFsqStatus = function(fsqStatusData) {
    this.fsqStatus = fsqStatusData;
  };
};

module.exports = Place;

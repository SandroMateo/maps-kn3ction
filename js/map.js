var googleKey = require("./../.env").googleKey;

function MapMaker() {
  this.map;
}

MapMaker.prototype.initiateMap = function() {
  this.map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.5207, lng: -122.6775},
    scrollwheel: true,
    zoom: 18
  });
};

exports.mapModule = MapMaker;

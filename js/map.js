var googleKey = require("./../.env").googleKey;

function MapMaker() {
  this.map;
}

MapMaker.prototype.initMap = function() {
  // $.get("https://maps.googleapis.com/maps/api/js?key=" + googleKey).then(function(response) {
    this.map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 45.5207, lng: -122.6775},
      zoom: 20
    });
  // }).fail(function(error) {
  //   $('#map').text("NOT WORKING");
  // });
};

exports.mapModule = MapMaker;

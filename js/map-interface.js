var MapMaker = require("./../js/map.js").mapModule;
var googleKey = require("./../.env").googleKey;

$(function() {
  $("#google-script").html("<script src=https://maps.googleapis.com/maps/api/js?key="+googleKey+"></script>");
  var map = new MapMaker();
  map.initMap();
  // $("#map").html(map.map);
});

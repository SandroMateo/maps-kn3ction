var MapMaker = require("./../js/map.js").mapModule;
var googleKey = require("./../.env").googleKey;

$(document).ready(function() {
  $("head").append("<script src=https://maps.googleapis.com/maps/api/js?key="+googleKey+"></script>");
  var map = new MapMaker();

  $("#map-init").click(function() {
    map.initiateMap();
  });
});

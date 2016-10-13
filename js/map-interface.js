var MapMaker = require("./../js/map.js").mapModule;
var Job = require("./../js/job.js").jobModule;
var googleKey = require("./../.env").googleKey;

$(document).ready(function() {
  $("head").append("<script src=https://maps.googleapis.com/maps/api/js?key="+googleKey+"></script>");
  var map = new MapMaker();
  var job = new Job();

  $("#map-init").click(function() {
    map.initiateMap();
    job.findJobs(map);


  });
});

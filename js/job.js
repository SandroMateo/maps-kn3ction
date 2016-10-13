var jobKey = require("./../.env").jobKey;

function Job() {
  this.companies;
}

Job.prototype.findJobs = function(_map) {
  $.get("https://authenticjobs.com/api/?api_key=" + jobKey + "&format=json&method=aj.jobs.getCompanies").then(function(response) {
    console.log(response);
    this.companies = response.companies.company;
    for (var i = 0; i < this.companies.length; i++) {
      _map.companyLocations(this.companies[i]);
    }
  }).fail(function(error) {
    console.log("FAILURE");
  })
}

exports.jobModule = Job;

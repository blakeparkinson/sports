var express = require('express');
var router = express.Router();

var request = require('request');
var nba_key = 'hdgj9e9vs9hquzc6ds22wtdy';

request('https://api.sportsdatallc.org/nba-t3/league/hierarchy.json?api_key=' + nba_key, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(response);
    var json_response = (JSON.parse(response.body));

    var teams = formatTeams(json_response)
  }
  else{
    console.log('hi');
    console.log(error)
  }
})
var nba_teams = {
    'NOP': 'New Orleans Pelicans',
    'GSW': 'Golden State Warriors',
    'SAS': 'San Antonio Spurs'
}

var formatTeams = function(hierarchy_response){
	var conferences = [],
		divisions = [],
		teams = [];
	for (i=0;i<hierarchy_response.conferences.length;i++){
		console.log(hierarchy_response.conferences[i].divisions.length);
		for (j=0;j<hierarchy_response.conferences[i].divisions.length;j++){
			console.log(hierarchy_response.conferences[i].divisions[j].teams.length);
			for(k=0; k< hierarchy_response.conferences[i].divisions[j].length; k++){
				console.log(hierarchy_response.conferences[i].divisions[j]);
			}

		}

	}
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { teams: nba_teams });
});

module.exports = router;


var express = require('express');
var router = express.Router();
var nba_teams = {
    'NOP': 'New Orleans Pelicans',
    'GSW': 'Golden State Warriors',
    'SAS': 'San Antonio Spurs'
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { teams: nba_teams });
});

module.exports = router;


// DOM Ready =============================================================
$(document).ready(function() {

    // Populate the user table on initial page load    
    $('body').on('click', '[data-action="pick-team"]', fetchTeam);

});

// Functions ============================================================= //


function fetchTeam(event) {
    var team = $('#teams option:selected').val();
    console.log(nba_key);

    request('https://api.sportsdatallc.org/nba-t3/league/hierarchy?api_key=' + nba_key, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
  else{
    console.log(error)
  }
})

}

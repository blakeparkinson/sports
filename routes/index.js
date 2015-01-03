var express = require('express');
var router = express.Router();
var nba_teams = {
    'NOP': 'New Orleans Pelicans',
    'GSW': 'Golden State Warriors',
    'SAS': 'San Antonio Spurts'
}

console.log(nba_teams);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { teams: nba_teams });
});

module.exports = router;

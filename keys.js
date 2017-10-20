//Twitter Keys

var Twitter = require('twitter');

exports.twitterKeys = Twitter ({
  consumer_key: 'vkG6HHpyqSJm8yLisSv5bs8cN',
  consumer_secret: 'f4xganbDiIUY2LfnG4pII7i7TkyUN4354CTMypTOMoA7YgZTSu',
  access_token_key: '921245649596641281-u1HE6zZQzHgWeMXU7LfPNM3fJVk7Tvs',
  access_token_secret: '1yZaREhLoqdptDU83GyDfGjdR5DuOsRZkX9Do8IfzJPBH',
}); 


////// spotify keys //////////
var Spotify = require('node-spotify-api');
 
exports.spotifyKeys = new Spotify({
  id: 'ea2523914172430ea289730174f34095',
  secret: '5899cd54f74e4e5ca19cb127e256b0ca'
});


exports.commands = { 
	action:process.argv[2], 
	value:process.argv[3]
}

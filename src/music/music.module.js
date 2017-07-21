(function () {
'use strict';

var app = angular.module('Music', ['ui.router', 'spotify']);

app.config(function (SpotifyProvider) {
  SpotifyProvider.setClientId('e355d494521a4e5592917a7a47936b6d');
  SpotifyProvider.setRedirectUri('http://localhost:3000/callback.html');
  SpotifyProvider.setScope('playlist-read-private');
});

app.controller('MainController', ['Spotify', function (Spotify) {
  var main = this;

  main.loggedIn = false;

  main.login = function () {
    Spotify.login().then(function (data) {
      console.log(data);
      main.loggedIn = true;
    }, function () {
      console.log('didn\'t log in');
    })
  };

  main.searchArtist = function () {
    Spotify.search(main.input, 'artist').then(function (data) {
      main.artists = data.data.artists.items;
    });
  };

  main.getData = function () {
    Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
      console.log(data);
    });
  }
}]);

})();

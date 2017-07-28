(function () {
'use strict';

var app = angular.module('Music', ['ui.router', 'spotify']);

app.config(function (SpotifyProvider) {
  SpotifyProvider.setClientId('e355d494521a4e5592917a7a47936b6d');
  SpotifyProvider.setRedirectUri('https://robertbzhang.github.io/spotify-lookup/callback.html');
  // SpotifyProvider.setRedirectUri('http://localhost:3000/callback.html');
  SpotifyProvider.setScope('playlist-read-private');
});


app.controller('MainController', ['Spotify', function (Spotify) {
  var main = this;

  main.artists = [];

  main.login = function () {
    Spotify.login().then(function (data) {
      console.log(data);
    }, function () {
      console.log('didn\'t log in');
    })
  };

  main.searchArtist = function () {
    main.artists = [];
    if (main.input.length !== 0) {
      Spotify.search(main.input, 'artist').then(function (data) {
        main.artists = data.data.artists.items;
        console.log(main.artists);
      });
    }
  };

}]);

})();

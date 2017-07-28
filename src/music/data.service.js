(function () {
'use strict';

angular.module('Music')
.service('DataService', DataService);

DataService.$inject = ['Spotify'];
function DataService(Spotify) {
  var service = this;


  service.findRelated = function (uri) {
    var artistURI = uri.substring(15);
    return Spotify.getRelatedArtists(artistURI).then(function (data) {
      return data.data.artists;
    });
  }

  service.getArtist = function (uri) {
    var artistURI = uri.substring(15);
    return Spotify.getArtist(artistURI).then(function (data) {
      return data.data;
    });
  }
}

})();

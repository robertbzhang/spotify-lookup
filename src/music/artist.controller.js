(function () {
'use strict';

angular.module('Music')
.controller('ArtistController', ArtistController);


ArtistController.$inject = ['relatedArtists', 'curArtist'];
function RelatedController(relatedArtists, curArtist) {
  var relatedList = this;
  relatedList.relatedArtists = relatedArtists;
  relatedList.curArtist = curArtist;
  // relatedList.albums = albums;
}

})();

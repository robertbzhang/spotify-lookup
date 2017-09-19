(function () {
'use strict';

angular.module('Music')
.controller('RelatedController', RelatedController);


RelatedController.$inject = ['relatedArtists', 'curArtist', 'albums'];
function RelatedController(relatedArtists, curArtist, albums) {
  var relatedList = this;
  relatedList.relatedArtists = relatedArtists;
  relatedList.curArtist = curArtist;
  relatedList.albums = albums;
}

})();

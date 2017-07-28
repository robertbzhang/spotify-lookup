(function () {
'use strict';

angular.module('Music')
.controller('RelatedController', RelatedController);


RelatedController.$inject = ['relatedArtists', 'curArtist'];
function RelatedController(relatedArtists, curArtist) {
  var relatedList = this;
  relatedList.relatedArtists = relatedArtists;
  relatedList.curArtist = curArtist;
}

})();

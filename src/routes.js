(function () {
'use strict';

angular.module('Music')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/music/templates/home.template.html',
    controller: 'MainController as main'
  })

  .state('search', {
    url: '/search',
    templateUrl: 'src/music/templates/search.template.html',
    controller: 'MainController as main'
  })

  .state('related', {
    url: '/related/{uri}',
    templateUrl: 'src/music/templates/related.template.html',
    controller: 'RelatedController as relatedList',
    resolve: {
      relatedArtists: ['$stateParams', 'DataService', function ($stateParams, DataService) {
        return DataService.findRelated($stateParams.uri);
      }],
      curArtist: ['$stateParams', 'DataService', function ($stateParams, DataService) {
        return DataService.getArtist($stateParams.uri);
      }],
      albums: ['$stateParams', 'DataService', function ($stateParams, DataService) {
        return DataService.getArtistAlbums($stateParams.uri);
      }]
    }
  })

  .state('artist', {
    url: '/artist/{uri}',
    templateUrl: 'src/music/templates/artist.template.html',
    controller: 'ArtistController as artistCtrl',
    resolve: {
      curArtist: ['$stateParams', 'DataService', function ($stateParams, DataService) {
        return DataService.getArtist($stateParams.uri);
      }]
    }
  });

}

})();

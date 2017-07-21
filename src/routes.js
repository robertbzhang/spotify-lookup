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
  });

  // // Premade list page
  // .state('mainList', {
  //   url: '/main-list',
  //   templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
  //   controller: 'MainShoppingListController as mainList',
  //   resolve: {
  //     items: ['ShoppingListService', function (ShoppingListService) {
  //       return ShoppingListService.getItems();
  //     }]
  //   }
  // });
}

})();

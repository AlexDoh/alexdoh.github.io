(() => {
  'use strict';

  angular.module('app').config(routerConfig);

  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      component: 'home',
    });

    $urlRouterProvider.otherwise('/');
  }

})();

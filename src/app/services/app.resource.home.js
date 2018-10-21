(() => {
  'use strict';

  angular.module('app')
    .service('homeDataService', dataService);

  dataService.$inject = [ '$http' ];

  function dataService($http) {
    this.getClients = () => $http.get('./data/clients.json');
    this.getModules = () => $http.get('./data/modules.json');
    this.getPermissions = () => $http.get('./data/permissions.json');
  }

})();


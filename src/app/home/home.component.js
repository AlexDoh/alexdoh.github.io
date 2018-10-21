(() => {
  'use strict';

  angular.module('app').component('home', {
    controller: [ 'homeDataService', HomeController ],
    controllerAs: '$ctrl',
    templateUrl: 'app/home/home.view.html',
  });

  function HomeController(dataService) {
    this.HEADER = 'Client permissions for modules';
    this.LIST_PERMISSIONS_HEADER = 'Modules for clients';

    this.$onInit = () => {
      dataService.getClients().then(response => this.clients = response.data);
      dataService.getModules().then(response => this.modules = response.data);
      dataService.getPermissions().then(response => this.clientModulePermissions = response.data);
    };

    this.getSelectedClientText = () => this.selectedClient ? this.selectedClient.name : 'Please select a client';

    this.changedClient = () =>
      this.modulesForClient = this.clientModulePermissions
        .filter(permission => permission.clientid === this.selectedClient.id)
        .map(permission => this.modules.filter(module => module.id === permission.moduleid)[ 0 ]);

    this.changedModule = () =>
      this.clientModulePermissions = [
        ...this.clientModulePermissions.filter(permission => permission.clientid !== this.selectedClient.id),
        ...this.modulesForClient.map(moduleForClient => ({
          clientid: this.selectedClient.id,
          moduleid: moduleForClient.id
        }))
      ];

    this.getPermissionDescription = (permission) => {
      const permissionClient = this.clients.find(client => client.id === permission.clientid);
      const permissionModule = this.modules.find(module => module.id === permission.moduleid);
      return `Client ${permissionClient.name} - Module ${permissionModule.name} (${permissionModule.description})`;
    }
  }

})();

(() => {
  'use strict';

  angular.module('app').component('home', {
    controller: HomeController,
    controllerAs: '$ctrl',
    templateUrl: 'app/home/home.view.html',
  });

  function HomeController() {
    this.HEADER = 'Client permissions for modules';
    this.LIST_PERMISSIONS_HEADER = 'Modules for clients';
    this.clients = [
      { id: 1, name: 'HSBC' },
      { id: 2, name: 'Citibank' },
      { id: 3, name: 'Wells' },
    ];

    this.modules = [
      { id: 1, name: "Analytics", description: 'Analytics Module' },
      { id: 2, name: "Reporting", description: 'Reporting Module' },
      { id: 3, name: 'Downloads', description: 'Downloads Module' },
      { id: 4, name: 'Home', description: 'Home Module' },
    ];

    this.clientModulePermissions = [
      { clientid: 1, moduleid: 4 },
      { clientid: 1, moduleid: 1 },
      { clientid: 1, moduleid: 2 },
      { clientid: 1, moduleid: 3 },
      { clientid: 2, moduleid: 4 },
      { clientid: 2, moduleid: 1 },
      { clientid: 2, moduleid: 2 },
      { clientid: 3, moduleid: 4 },
      { clientid: 3, moduleid: 3 }
    ];

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

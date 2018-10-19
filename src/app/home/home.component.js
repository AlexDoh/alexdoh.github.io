(() => {
  'use strict';

  angular.module('app').component('home', {
    controller: HomeController,
    controllerAs: '$ctrl',
    templateUrl: 'app/home/home.view.html',
  });

  /** @ngInject */
  function HomeController($log, $scope) {
    const $ctrl = this;

    this.selectedClient = '';
    this.modulesForClient = '';

    this.clients = [
      {id: 1, name: "HSBC"},
      {id: 2, name: "Citibank"},
      {id: 3, name: "Wells"},
    ];

    this.modules = [
      {id: 1, name: "Analytics", description: "Analytics Module"},
      {id: 2, name: "Reporting", description: "Reporting Module"},
      {id: 3, name: "Downloads", description: "Downloads Module"},
      {id: 4, name: "Home", description: "Home Module"},
    ];

    this.clientModules = [
      {clientid: 1, moduleid: 4},
      {clientid: 1, moduleid: 1},
      {clientid: 1, moduleid: 2},
      {clientid: 1, moduleid: 3},
      {clientid: 2, moduleid: 4},
      {clientid: 2, moduleid: 1},
      {clientid: 2, moduleid: 2},
      {clientid: 3, moduleid: 4},
      {clientid: 3, moduleid: 3}
    ];

    this.getSelectedText = () => this.selectedClient ? this.selectedClient.name : "Please select a client";

    this.changedClient = () => {
      this.modulesForClient = this.clientModules.filter(clientModule => clientModule.clientid === this.selectedClient.id);
    };

    activate();

    function activate() {
      $log.debug('home activated');
    }

    $scope.sizes = [
      "small (12-inch)",
      "medium (14-inch)",
      "large (16-inch)",
      "insane (42-inch)"
    ];
    $scope.toppings = [
      {category: 'meat', name: 'Pepperoni'},
      {category: 'meat', name: 'Sausage'},
      {category: 'meat', name: 'Ground Beef'},
      {category: 'meat', name: 'Bacon'},
      {category: 'veg', name: 'Mushrooms'},
      {category: 'veg', name: 'Onion'},
      {category: 'veg', name: 'Green Pepper'},
      {category: 'veg', name: 'Green Olives'}
    ];
    $scope.selectedToppings = [];
    $scope.printSelectedToppings = function printSelectedToppings() {
      var numberOfToppings = this.selectedToppings.length;

      // If there is more than one topping, we add an 'and'
      // to be gramatically correct. If there are 3+ toppings
      // we also add an oxford comma.
      if (numberOfToppings > 1) {
        var needsOxfordComma = numberOfToppings > 2;
        var lastToppingConjunction = (needsOxfordComma ? ',' : '') + ' and ';
        var lastTopping = lastToppingConjunction +
          this.selectedToppings[this.selectedToppings.length - 1];
        return this.selectedToppings.slice(0, -1).join(', ') + lastTopping;
      }

      return this.selectedToppings.join('');
    };

  }

})();

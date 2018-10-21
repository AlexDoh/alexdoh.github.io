(() => {
  'use strict';

  angular.module('app').config(configBlock);

  function configBlock($logProvider) {
    $logProvider.debugEnabled(true);

  }

})();

(() => {
  'use strict';

  angular.module('app').run(runBlock);

  function runBlock($log) {

    $log.debug('App run block end');
  }

})();

(function () {
'use strict';

angular.module('MenuData')
.controller('MenusController', MenusController);

// Version with resolving to 1 item based on $stateParams in route config
MenusController.$inject = ['$stateParams',  'MenuDataService'];
function MenusController($stateParams,  MenuDataService) {
  var vm = this;
  var shortName = $stateParams.shortname;  

  vm.menus=[];
  var promise = MenuDataService.getItemsForCategory(shortName);

  promise.then(function(res){
    vm.menus = res.data.menu_items;

  });
}

})();

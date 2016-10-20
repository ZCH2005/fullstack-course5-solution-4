(function () {
'use strict';

angular.module('MenuData')
.component('menuList', {
  templateUrl: 'src/templates/menuDetail.html',
  bindings: {
    items: '<'
  }
});

})();

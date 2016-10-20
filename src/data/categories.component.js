(function () {
'use strict';

angular.module('MenuData')
.component('categoryList', {
  templateUrl: 'src/templates/categoryList.html',
  bindings: {
    items: '<'
  }
});

})();

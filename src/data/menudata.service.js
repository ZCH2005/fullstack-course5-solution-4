(function(){
 
 'use strict'
 angular.module('MenuData').service('MenuDataService', MenuDataService);

MenuDataService.$inject=['$http'];

function MenuDataService($http){
    var svc = this;
    svc.getAllCategories = function(){
         return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/categories.json'
            });
        
    };

    svc.getItemsForCategory = function(categoryShortName){
          return $http({
                method: 'GET',
                url: 'https://davids-restaurant.herokuapp.com/menu_items.json?category=',
                params: {"category": categoryShortName}
            });
         
    };
}

})();
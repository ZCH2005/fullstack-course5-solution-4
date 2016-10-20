(function () {
    'use strict';

    angular.module('MenuData')
        .controller('CategoryListController', CategoryListController);


    CategoryListController.$inject = ['MenuDataService' , 'items'];
    function CategoryListController(MenuDataService, items) {
        var mainList = this;
        mainList.items = items;


        // var promise = MenuDataService.getAllCategories();
        // promise.then(function (response) {
        //     var menus = response.data;
        //     mainList.items = menus;
        // })

    }

})();

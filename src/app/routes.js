(function () {

    'use strict'

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'src/templates/home.html'
            })

            //Premade list page
            .state('menuCategories', {
                url: '/categories',
                templateUrl: 'src/templates/categories.html',
                controller: 'CategoryListController as mainList',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories().then(function(res){
                            return res.data;
                        });
                    }]
                }
            })

            // // Item detail
            .state('menus', {
                url: '/menus/{shortname}',
                templateUrl: 'src/templates/menus.html',
                controller: 'MenusController as vm'
                //  resolve: {
                //     menus: ['MenuDataService', function (MenuDataService) {
                //         var item = items[]
                //         return MenuDataService.getAllCategories().then(function(res){
                //             return res.data;
                //         });
                //     }]
                // }
            })
            ;
    }
})();
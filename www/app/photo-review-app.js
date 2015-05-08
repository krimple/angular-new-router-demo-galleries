(function() {
	'use strict';

	angular.module('photoreview',
		['photoreview.galleries',
		 'photoreview.gallery',
		 'photoreview.services',
		 'ngNewRouter', 'ngAnimate', 'ngAria', 'ngMaterial'])
	.controller('AppController', ['$router', AppController])
	.factory('_', function() {
	    return _;
    })
    .config(materialConfig)
    .config(componentLoaderConfig)
	.run(galleryRunFunction);

	function galleryRunFunction($log, $httpBackend, galleryRepositoryService) {
        // initialize data store
        $log.debug('initializing store');
        galleryRepositoryService.loadGalleries();
	}

	function AppController($router) {
		$router.config([
            // todo - default path - '' is greedy!
			{ path: '/', redirectTo: '/galleries' },
			{ path: '/galleries', component: 'galleries' },
			{ path: '/gallery/:id', component: 'gallery' },
            { path: '/gallery/:id/edit', component: 'editGallery' }
			//{ path: '/galleries/:galleryId/photo/:photoId', component: 'photo' }
		]);
	}

    function materialConfig($mdThemingProvider, $mdIconProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('brown')
            .accentPalette('red');
    }

    // copied from router.es5.js
    function dashCase(str) {
      return str.replace(/([A-Z])/g, function ($1) {
         return '-' + $1.toLowerCase();
      });
    }

    function componentLoaderConfig($componentLoaderProvider) {
         $componentLoaderProvider.setTemplateMapping(function (name) {
              var dashName = dashCase(name);
              // customized to use app prefix
              return './app/components/' + dashName + '/' + dashName + '.html';
         });
    }
}());

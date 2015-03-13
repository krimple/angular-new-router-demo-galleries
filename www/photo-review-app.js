(function() {
	'use strict';

	angular.module('photoreview', 
		['photoreview.galleries', 'photoreview.galleries.gallery',
		  'ngNewRouter', 'ngAnimate', 'ngAria', 'ngMaterial'])
	.controller('AppController', ['$router', AppController]);

	function AppController($router) {
		$router.config([
			{ path: '/', redirectTo: '/galleries' },
			{ path: '/galleries', component: 'galleries' },
			{ path: '/gallery/:id', component: 'gallery' }
			//{ path: '/galleries/:galleryId/photo/:photoId', component: 'photo' }
		]);
	}
}());

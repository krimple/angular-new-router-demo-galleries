(function() {
	'use strict';

	angular.module('photoreview', 
		['ngNewRouter', 'photoreview.galleries', 'photoreview.galleries.gallery'])
	.controller('AppController', ['$router', AppController]);

	function AppController($router) {
		$router.config([
			{ path: '/', redirectTo: '/galleries' },
			{ path: '/galleries', component: 'galleries' },
			{ path: '/galleries/:id', component: 'gallery' }
			{ path: '/galleries/:galleryId/photo/:photoId', component: 'photo' }
		]);
	}
}());
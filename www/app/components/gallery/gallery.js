(function() {
	'use strict';

	angular.module('photoreview.galleries.gallery', [])
	.controller('GalleryController', function($routeParams, galleryRepositoryService) {
		var gallery = this;
		var galleryId = $routeParams.id;
		gallery.data = galleryRepositoryService.galleries[galleryId];
	});


}());

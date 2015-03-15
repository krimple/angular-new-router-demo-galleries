(function() {
	'use strict';

	angular.module('photoreview.galleries.gallery', ['ngMockE2E'])
	.controller('GalleryController', function($routeParams, galleryRepositoryService) {
		var vm = this;
		var galleryId = $routeParams.id;
		vm.gallery = galleryRepositoryService.galleries[galleryId];
	});


}());

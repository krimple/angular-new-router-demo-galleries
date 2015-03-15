(function() {
	'use strict';

	angular.module('photoreview.galleries', [])
	.controller('GalleriesController', function(galleryRepositoryService) {
		var galleries = this;

		// establish reference
		galleries.data = galleryRepositoryService.galleries;

	})
	.run(function($httpBackend, galleryRepositoryService) {
        // initialize data store
        galleryRepositoryService.loadGalleries();

		// fake out the gallery fetch
		$httpBackend.whenGET(/\/api\/v1\/galleries/).passThrough();
	});

}());

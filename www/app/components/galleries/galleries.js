(function() {
	'use strict';

	angular.module('photoreview.galleries', [])
	.controller('GalleriesController', function(galleryRepositoryService) {
		var vm = this;

		// establish reference
		vm.galleries = galleryRepositoryService.galleries;

	})
	.run(function($httpBackend, galleryRepositoryService) {
        // initialize data store
        galleryRepositoryService.loadGalleries();

		// fake out the gallery fetch
		$httpBackend.whenGET(/\/api\/v1\/galleries/).passThrough();
	});

}());

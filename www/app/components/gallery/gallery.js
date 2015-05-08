(function() {
	'use strict';

    // interesting factoid - ngNewRouter will dynamically add the photoreview
    // module dependency - I had left it out
    // However, when testing you need to test the module and provide the parent
    // module or the test won't provide the galleryRepository service. GOTCHA
	angular.module('photoreview.gallery', ['photoreview.services'])
	.controller('GalleryController', function($routeParams, galleryRepositoryService) {
		var gallery = this;
		var galleryId = $routeParams.id;
		gallery.data = galleryRepositoryService.galleries[galleryId];
	});


}());

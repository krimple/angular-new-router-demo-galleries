(function() {
	'use strict';

	angular.module('photoreview.galleries.gallery', ['ngMockE2E'])
	.controller('GalleryController', function($http, $routeParams, $log) {
		var vm = this;
		var galleryId = $routeParams['id'];
		// TODO - extract to service
		$http.get('/api/v1/galleries/' + galleryId)
		.success(function(data) {
			vm.gallery = data;
		})
		.error(function(data, status) {
			$log.error('fetch failed!');
			vm.gallery = [];
			vm.errorCondition = true;
		});
	})
	.run(function($httpBackend) {
		// fake out the gallery fetch
		$httpBackend.whenGET('/api/v1/galleries/1').respond({ 
			id: 'one', 
			title: 'gallery 1', 
			location: 'gallery1',
			images: [ 
				{ fileName: '/one.jpg', title: 'one', description: "this is the one" },
				{ fileName: '/two.jpg', title: 'two', description: "this is the two" }
 			]
 		});
		$httpBackend.whenGET(/^\.\/components\/(.*).html/).passThrough();
	});


}());

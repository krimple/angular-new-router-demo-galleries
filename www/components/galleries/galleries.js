(function() {
	'use strict';

	angular.module('photoreview.galleries', ['ngMockE2E'])
	.controller('GalleriesController', function($http, $log) {
		var vm = this;
		// TODO - extract to service
		$http.get('/api/v1/galleries')
		.success(function(data) {
			vm.galleries = data;
		})
		.error(function(data, status) {
			$log.error('fetch failed!');
			vm.galleries = [];
			vm.errorCondition = true;
		});
	})
	.run(function($httpBackend) {
		// fake out the gallery fetch
		$httpBackend.whenGET('/api/v1/galleries').respond([
			{ id: 'one', title: 'gallery 1', location: 'gallery1'},
			{ id: 'two', title: 'gallery 2', location: 'gallery2'},
			{ id: 'three', title: 'gallery 3', location: 'gallery3'},
			{ id: 'four', title: 'gallery 4', location: 'gallery4'}
		]);
		$httpBackend.whenGET(/^\	.\/components\/(.*).html/).passThrough();
	});


}());
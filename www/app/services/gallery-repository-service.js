(function() {
    'use strict';
    angular.module('photoreview.services', [])
    .service('galleryRepositoryService', function($http) {
        this.galleries = [];
        this.loadGalleries = function() {
          var that = this;
          $http.get('/api/v1/galleries')
          .then(
              function(response) {
                    // keep references working
                    angular.copy(response.data, that.galleries);
                    that.errorCondition = false;
              },
		      function(error) {
        			$log.error('fetch failed!');
        			// wipe galleries without removing reference
	        		that.galleries.length = 0;
			        that.errorCondition = true;
              });
        };
    });
}());


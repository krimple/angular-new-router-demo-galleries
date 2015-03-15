(function() {
    'use strict';
    angular.module('photoreview')
    .controller('GalleryDataController', function(galleryRepositoryService) {
        var vm = this;
        vm.galleries = galleryRepositoryService.galleries;
    });
}());



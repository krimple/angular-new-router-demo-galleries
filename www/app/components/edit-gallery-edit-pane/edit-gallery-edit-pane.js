(function(angular) {
    'use strict';
    angular.module('photoreview.edit-gallery-edit-pane', ['photoreview.edit-gallery-edit-pane'])
    .controller('EditGalleryEditPaneController', function($routeParams, galleryRepositoryService) {
        var editGalleryEditPane = this,
            id = $routeParams.id;

        editGalleryEditPane.model = galleryRepositoryService.getGallery(id);

    });

}(window.angular));



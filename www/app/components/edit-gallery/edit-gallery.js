(function() {
    'use strict';
    angular.module('photoreview.edit-gallery', ['photoreview.edit-gallery-edit-pane'])
    .controller('EditGalleryController', function() {
        var editgallery = this;

        editgallery.message = "hiya folks!";
    });

}());


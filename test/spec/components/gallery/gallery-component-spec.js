describe('Gallery Component', function() {
    var gallery = null, $scope = null;

    beforeEach(angular.module('photoreview'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        gallery = $controller('GalleryController', {
            $scope: $scope
        });
    }));

    it('should load data from the gallery repository service', function() {
        expect(gallery.data).toBeDefined();
    });
});


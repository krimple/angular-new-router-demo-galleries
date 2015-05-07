describe('Gallery Data Controller (for menu)', function() {
    var $scope = null, controller = null;

    beforeEach(module('photoreview'));

    beforeEach(inject(function($rootScope, $controller) {
        $scope = $rootScope.$new();
        controller = $controller('GalleryDataController', {
            galleryRepositoryService: {
                galleries: mockGalleries
            }
        });
    })); 

    it('should possess galleries on the controller instance', function() {
        expect(controller.galleries).toBe(mockGalleries);
    });
});

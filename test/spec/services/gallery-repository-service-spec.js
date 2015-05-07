(function() {
    'use strict';
    
    describe('Gallery Repository Service', function() {
        var galleryRepositoryService = null;

        beforeEach(module('photoreview.services'));

        beforeEach(inject(function(_galleryRepositoryService_) {
            galleryRepositoryService = _galleryRepositoryService_;
        }));

        beforeEach(inject(function($httpBackend) {
            $httpBackend.expectGET('/api/v1/galleries')
            .respond(200, mockGalleries);
        }));

        it('should bootstrap properly', function() {
            expect(galleryRepositoryService.galleries).toBeDefined();
        });
    });
}());


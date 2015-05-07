alert('got here!');
angular.module('photoreview-e2e', ['ngMockE2E', 'photoreview-stub'])
.run(function($httpBackend) {
    console.log('setting up facke backend');
});

// Karma configuration
// Generated on Wed Mar 11 2015 13:46:48 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'www/lib/bower_components/angular/angular.js',
      'www/lib/bower_components/angular-material/angular-material.js',
      'www/lib/bower_components/angular-animate/angular-animate.js',
      'www/lib/bower_components/angular-aria/angular-aria.js',
      'www/lib/bower_components/angular-new-router/dist/router.es5.js',
      'www/lib/bower_components/angular-mocks/angular-mocks.js',
      'www/app/photo-review-app.js',
      'www/app/photo-review-e2e-stub.js',
      'www/app/controllers/**/*.js',
      'www/app/services/**/*.js',
      'www/app/components/**/*.js',
      'test/mocks/**/*.js',
      'test/spec/**/*.js'
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots', 'progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};

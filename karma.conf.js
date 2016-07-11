// Karma configuration
// Generated on Thu Jul 07 2016 09:18:18 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    // Make sure to have them in the correct order.
    files: [
      'src/web_app/js/testpolyfills.js',
      'src/web_app/js/test_mocks.js',
      'out/app_engine/js/apprtc.debug.js',
      'src/web_app/js/appcontroller_test.js',
      'src/web_app/js/analytics_test.js',
      'out/chrome_app/js/background.js',
      'src/web_app/js/background_test.js',
      'src/web_app/js/call_test.js',
      'src/web_app/js/infobox_test.js',
      'src/web_app/js/peerconnectionclient_test.js',
      'src/web_app/js/remotewebsocket_test.js',
      'src/web_app/js/roomselection_test.js',
      'src/web_app/js/sdputils_test.js',
      'src/web_app/js/signalingchannel_test.js',
      'src/web_app/js/utils_test.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/web_app/js/*.js': ['eslint']
    },

    eslint: {
      stopOnError: false,
      stopOnWarning: true,
      showWarnings: true,
      engine: {
        configFile: '.eslintrc'
      }
    },

    client: {
      captureConsole: false
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

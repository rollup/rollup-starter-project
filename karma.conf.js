// Karma configuration
// Generated on Sun Feb 05 2017 11:15:12 GMT+1100 (AEDT)
var babel = require('rollup-plugin-babel');
var babelrc = require('babelrc-rollup').default;
var globals = require('rollup-plugin-node-globals');
var builtins = require('rollup-plugin-node-builtins');
var resolve = require('rollup-plugin-node-resolve');
var istanbul = require('rollup-plugin-istanbul');

var pkg = require('./package.json');
var external = Object.keys(pkg.dependencies);
var testFiles = [
  'test/**/*_test.js'
];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],

    client: { mocha: { reporter: './istanbul.reporter.js' } },

    // list of files / patterns to load in the browser
    files: testFiles,


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'test/**/*_test.js': ['rollup']
    },

    rollupPreprocessor: {
      plugins: [
        babel(babelrc()),
        globals(),
        builtins(),
        resolve({
          jsnext: true
        }),
        istanbul({
          exclude: testFiles.concat([ 'node_modules/**/*' ])
        })
      ],
      external: external,
      format: 'iife',
      sourceMap: 'inline'
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}

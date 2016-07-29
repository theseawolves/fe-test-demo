module.exports = function(config) {
  config.set({
    frameworks: ['mocha','browserify'],
    files: [
      './node_modules/should/should.js',
      './src/index.js',
      './test/index.js'
    ],
    preprocessors: {
      './src/index.js': ['browserify'],
      './test/index.js': ['browserify']
    },
    browserify: {
     debug: true,
     transform: [
       [
         'babelify',
         {
           presets: 'es2015'
         }
       ],
       [
         'browserify-istanbul',
         {
           instrumenterConfig: {
             embedSource: true
           }
         }
       ]
     ]
    },
    plugins: ['karma-mocha', 'karma-phantomjs-launcher',
    'karma-chrome-launcher', 'karma-firefox-launcher',
    'karma-coverage', 'karma-spec-reporter','karma-browserify',
    'browserify-istanbul'],
    browsers: ['PhantomJS', 'Firefox', 'Chrome'],
    reporters: ['spec', 'coverage'],
    coverageReporter: {
      dir: 'coverage',
      reporters: [{
        type: 'json',
        subdir: '.',
        file: 'coverage.json',
      }, {
        type: 'lcov',
        subdir: '.'
      }, {
        type: 'text-summary'
      }]
    }
  });
};

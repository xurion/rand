module.exports = function (config) {

    'use strict';

    config.set({

        basePath: './',
        frameworks: ['jasmine'],
        files: [
            'src/Rand.js',
            'tests/Rand.spec.js'
		],

        browsers: ['Chrome'],
        singleRun: true,
        autoWatch: true,

        plugins: [
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-nyan-reporter'
        ],

        reporters: ['nyan']
    });
};

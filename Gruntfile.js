module.exports = function (grunt) {

    'use strict';

    grunt.loadNpmTasks('grunt-karma')

    grunt.initConfig({

        karma: {

            once: {

                configFile: 'karma.conf.js'
            },
            persist: {

                configFile: 'karma.conf.js',
                singleRun: false
            }
        }
    })

    grunt.registerTask('default', ['test'])
    grunt.registerTask('test', ['karma:once'])
}

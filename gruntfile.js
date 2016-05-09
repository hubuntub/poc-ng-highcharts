'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);
    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);
    //options
    var express_port = 9002;

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: '',
        version: grunt.file.readJSON('package.json').version,
    };

    // Define the configuration for all the tasks
    grunt.initConfig({

        watch: {
            express: {
                options: {
                    livereload: true,
                    spawn: false
                },
                files: [],
                tasks: []
            }
        },

        concurrent: {
            dev: {
                options: {
                    logConcurrentOutput: false,
                    limit: 3
                },
                tasks: ['watch:express']
            },
        },

        // The actual grunt server settings
        express: {
            options: {
                port: 9002,
                cmd: process.argv[0],
                opts: [],
                args: [],
                debug: false,
                background: true,
                script: 'server.js',
                node_env: 'development'
            },
            default: {},
            local: {
                options: {
                    node_env: 'local'
                }
            },
            integration: {
                options: {
                    node_env: 'integration'
                }
            }
        }

    });

    grunt.registerTask('watchdev', ['concurrent:dev']);


    grunt.registerTask('server', 'Starts express server instance', function (target) {
        var env = target ? target : 'default';
        grunt.task.run(['express:local', 'watchdev']);
    });

    grunt.registerTask('default', [
        'server'
    ]);

};

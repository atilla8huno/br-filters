module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt, {
        scope: 'devDependencies'
    });

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'src',
        dist: 'dist'
    };

    grunt.initConfig({

        clean: {
            build: {
                src: ['dist', '.tmp']
            }
        },

        concat: {
            generated: {
                dest: '.tmp/js/br-filters.js',
                src: ['src/br-filters.module.js', 'src/{,*/}*.js', '!src/{,*/}*.spec.js', '!src/{,*/}*_test.js']
            }
        },

        ngAnnotate: {
            options: {
                singleQuotes: true
            },
            generated: {
                files: [
                    {
                        expand: true,
                        src: ['dist/{,*/}*.js', 'src/{,*/}*.js', '.tmp/js/{,*/}*.js']
                    }
                ]
            },
        },

        copy: {
            generated: {
                files: [
                    {
                        filter: 'isFile',
                        flatten: true,
                        expand: true,
                        dest: 'dist/',
                        src: ['.tmp/js/br-filters.js']
                    }
                ]
            }
        },

        uglify: {
            generated: {
                files: [
                    {
                        dest: 'dist/br-filters.min.js',
                        src: ['.tmp/js/br-filters.js']
                    }
                ]
            }
        }
    });

    grunt.registerTask('build', [
        'clean',
        'concat',
        'ngAnnotate',
        'copy',
        'uglify'
    ]);
};

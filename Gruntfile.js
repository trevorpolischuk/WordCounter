module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    qunit: {
        files: ['tests.html']
    },
    jshint: {
        files: ['Gruntfile.js', 'js/main.js', 'tests/resources/tests.js'],
        options: {
            // options here to override JSHint defaults
            globals: {
                jQuery: true,
                console: true,
                module: true,
                document: true
            }
        }
    },
    // Project configuration.
    uglify: {
        options: {
            mangle: false
        },
        my_target: {
            files: {
                'wordcounter.min.js': ['js/main.js']
            }
        }
    },
    watch: {
        files: ['js/main.js', 'tests/resources/tests.js'],
        tasks: ['jshint', 'qunit', 'uglify']
    }
});

grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['qunit', 'jshint', 'watch', 'uglify']);

};
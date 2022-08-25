module.exports = function(grunt) {
    grunt.initConfig({
        'dart-sass': {
            options: {
                sourceMap: true,
                outFile: '../assets/css/main.css.map',
            },
            dist: {
                files: [
                    {
                        '../assets/css/main.css': 'src/sass/main.scss',
                    },
                ],
            },
        },
        concat: {
            options: {
                sourceMap: true,
                outFile: '../assets/js/main.js.map',
                separator: ';\n',
            },
            dist: {
                src: ['src/js/main*.js'],
                dest: '../assets/js/main.js',
            },
        },
        watch: {
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['dart-sass'],
            },
            js: {
                files: 'src/js/**/*.js',
                tasks: ['concat'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-dart-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['dart-sass', 'concat', 'watch']);
};

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
                separator: ';\n',
            },
            jsmain: {
                src: ['src/js/main*.js'],
                dest: '../assets/js/main.js',
            },
            jsvendor: {
                src: ['src/js/vendor/*.js'],
                dest: '../assets/js/vendor/bundle.js',

            },
        },
        watch: {
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['dart-sass'],
            },
            jsmain: {
                files: 'src/js/main*.js',
                tasks: ['concat:jsmain'],
            },
            jsvendor: {
                files: 'src/js/vendor/*.js',
                tasks: ['concat:jsvendor'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-dart-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['dart-sass', 'concat', 'watch']);
};


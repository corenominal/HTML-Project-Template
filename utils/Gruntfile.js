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
        copy: {
            cpjs: {
                files: [{
                    cwd: 'src/js',
                    src: '**/*',
                    dest: '../assets/js',
                    expand: true,
                }],
            },
        },
        watch: {
            css: {
                files: 'src/sass/**/*.scss',
                tasks: ['dart-sass'],
            },
            jsmain: {
                files: 'src/js/*.js',
                tasks: ['copy'],
            },
        },
    });

    grunt.loadNpmTasks('grunt-dart-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['dart-sass', 'copy', 'watch']);
};


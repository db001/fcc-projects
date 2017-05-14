module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        sourcemap: false
      },
      dist: {
        files: {
          // dist:  src
          'dist/css/styles.css': 'src/scss/styles.scss'
        }
      }
    },

  watch: {
    css: {
      files: 'src/scss/*.scss',
      tasks: ['sass'],
      options: {
        livereload: true,
      },
    },
  } 

  });

grunt.loadNpmTasks('grunt-sass');
grunt.loadNpmTasks('grunt-contrib-watch');


grunt.registerTask('default', ['sass', 'watch']);
};
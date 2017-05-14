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
    }
  });

grunt.loadNpmTasks('grunt-sass');

grunt.registerTask('default', ['sass']);
};
module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jade: {
          compile: {
            files: [{
              cwd: 'source/templates',
              src: ['**/*.jade'],
              dest: 'destination',
              expand: true,
              ext: '.html',
            }]
          }
        },

        less: {
            development: {
                options: {
                  paths: ["assets/css"]
                },
                files: {
                  "source/css/temp/main_less.css": "source/css/main.less"
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 3 version', 'ie 8', 'ie 9']
            },
            single_file: {
                src: 'source/css/temp/main_less.css',
                dest: 'source/css/temp/main_less_prefix.css'
            }
        },

        csso: {
            dist: {
                files: {
                    'destination/css/main.css': ['source/css/temp/main_less_prefix.css']
                }
            }
        },

        jshint: {
          options: {
            curly: true,
            eqeqeq: true,
            immed: true,
            latedef: true,
            newcap: true,
            noarg: true,
            sub: true,
            undef: true,
            eqnull: true,
            browser: true,
            globals: {
              jQuery: true,
              $: true,
              console: true
            }
          },
          '<%= pkg.name %>': {
            src: ['source/js/*.js','!source/js/temp/*.js']
          }
        },
 
        concat: {
            dist: {
                src: ['source/js/*.js','!source/js/temp/*.js'],
                dest: 'source/js/temp/main.js'
            }
        },
 
        uglify: {
            /*
            options: {
                stripBanners: true,
                banner: '// <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> \n'
            },
            */
 
            build: {
                src: 'source/js/temp/main.js',
                dest: 'destination/js/main.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'source/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'destination/img/'
                }]
            }
        },

        connect: {
            server: {
                options: {
                    port: 3000,
                    base: 'destination',
                }
            }
         },
        
        /*
        cssmin: {
            with_banner: {
                options: {
                    banner: ''
                },
 
                files: {
                    'css/style_pre.min.css' : ['css/normalize.css','css/main.css']
                }
            }
        },*/

 
        watch: {
            jade: {
                files: ['source/templates/**/*.jade'],
                tasks: ['jade']
            },

            less: {
                files: ['source/css/*.less'],
                tasks: ['less','autoprefixer','csso']
            },

           
            jshint: {
                files: ['source/js/*.js','!source/js/temp/*.js'],
                tasks: ['jshint', 'concat', 'uglify']
            },

            imagemin: {
                files: ['source/img/**/*.{png,jpg,gif}'],
                tasks: ['imagemin'],
            },

            livereload: {
                options: {
                    livereload: true
                },
                files: ['destination/**/*'],
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-csso');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-remove-logging');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-connect');
    
    grunt.registerTask('default', ['jade', 'less',  'autoprefixer', 'csso', 'jshint', 'concat', 'uglify', 'imagemin', 'connect', 'watch']);

    grunt.registerTask('test', ['']);
};
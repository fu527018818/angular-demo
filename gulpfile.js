var  gulp = require('gulp'),
  concat = require('gulp-concat'), 
  uglify = require('gulp-uglify'),
  htmlmin = require('gulp-minify-html'),
  cssmin = require('gulp-minify-css'),
  browserSync = require('browser-sync'),
  order = require('gulp-order')

gulp.task('default',['build'],function(){
    //指定单个文件防止文件刷新 在node_modules里面找
    var files = [
        '*.html',
        '**/*.html'
    ]
     browserSync.init(files,{
        server: './build'
    })
    gulp.watch(['./*.html','./tpl/*.html'],['htmlmin'])
    gulp.watch(['./controllers/*.js','./services/*.js'],['minjs'])
    // gulp.watch('./**/*.*',browserSync.reload)
    // gulp.watch('./*.*',browserSync.reload)  
})
gulp.task('build',['minjs','htmlmin'])

gulp.task('minjs',function(){
    gulp.src(['./main.js','./services/api_books.js','./controllers/controller_detail.js','./controllers/controller_list.js'])
    .pipe(order(['main.js','services/api_books.js','controllers/controller_detail.js','controllers/controller_list.js'],{base:'./'}))
    .pipe(concat('dist.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'))
})

gulp.task('htmlmin',function (){
    gulp.src('./router.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('build'))
    gulp.src('./tpl/detail.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('build/tpl'))
    gulp.src('./tpl/list.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('build/tpl'))
})

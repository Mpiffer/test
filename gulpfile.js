```javascript
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// Compile SCSS into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/styles/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("src/styles"))
        .pipe(browserSync.stream());
});

// Static Server + watching scss/html files
gulp.task('serve', gulp.series('sass', function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch("src/styles/*.scss", gulp.series('sass'));
    gulp.watch("src/*.html").on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('serve'));
```
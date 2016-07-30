var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function () {
    var port = 8900,
        index = '/index.html';
    browserSync.init({
        server: {
            baseDir: "./"
        },
        ui: {
            port: port + 1,
            weinre: {
                port: port + 2
            }
        },
        files: ["./demo/**", "./statics/**", "./*.html"],
        port: port,
        open: "external",
        startPath: index
    });
});

gulp.task('default', function () {
    gulp.start('server');
});

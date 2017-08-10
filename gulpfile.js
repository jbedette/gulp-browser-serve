/*jslint node: true */

var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    browserPref = 'default';

/**
 * CHOOSE A BROWSER OTHER THAN THE DEFAULT
 *
 * The following six tasks set the browser preference variable (browserPref) in
 * the browserSync preferences read by the serve task. To use either of the four
 * browsers when serving this project, invoke Gulp as follows:
 *
 *    gulp safari serve
 *    gulp firefox serve
 *    gulp chrome serve
 *    gulp opera serve
 *    gulp edge serve
 *    gulp ie serve
 */

gulp.task('safari', function () {
    'use strict';

    browserPref = 'safari';
});

gulp.task('firefox', function () {
    'use strict';

    browserPref = 'firefox';
});

gulp.task('chrome', function () {
    'use strict';

    browserPref = 'google chrome';
});

gulp.task('opera', function () {
    'use strict';

    browserPref = 'opera';
});

gulp.task('edge', function () {
    'use strict';

    browserPref = 'microsoft-edge';
});

gulp.task('ie', function () {
    'use strict';

    browserPref = 'iexplore';
});

gulp.task('serve', function () {
    'use strict';

    browserSync({
        browser: browserPref,
        notify: true,
        port: 9000,
        server: './'
    });

    gulp.watch('./').on('change', reload);
    gulp.watch('**/*').on('change', reload);
    gulp.watch('*.*/*').on('change', reload);
});

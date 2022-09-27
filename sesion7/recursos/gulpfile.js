const { parallel, watch } = require('gulp');
const sass = require('./gulp-tasks/sass.js');

const watcher = () => {
    watch('./src/scss/**/*.scss', {ignoreInitial: true}, sass);
}

exports.default = parallel(sass);
exports.watch = watcher;
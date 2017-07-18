const through = require('through2'),
  gutil = require('gulp-util'),
  prettierEslint = require('prettier-eslint'),
  merge = require('merge'),
  applySourceMap = require('vinyl-sourcemaps-apply');

var PluginError = gutil.PluginError;

module.exports = function() {
  function transform(file, encoding, callback) {
    if (file.isNull())
      return callback(null, file);
    if (file.isStream())
      return callback(new PluginError(
        'gulp-prettier-eslint',
        'Streaming not supported'
      ));

    let data;
    const str = file.contents.toString('utf8');

    try {
      data = prettierEslint({
          text: str,
          filePath: file.path,
      });
    } catch (err) {
      return callback(new PluginError('gulp-prettier-eslint', err));
    }

    if (data && data.v3SourceMap && file.sourceMap) {
      applySourceMap(file, data.v3SourceMap);
      file.contents = new Buffer(data.js);
    } else {
      file.contents = new Buffer(data);
    }

    callback(null, file);
  }

  return through.obj(transform);
};

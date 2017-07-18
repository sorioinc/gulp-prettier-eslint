# Gulp Prettier Eslint

A [Gulp](http://gulpjs.com/) plugin which allows the users to use [Prettier Eslint](https://github.com/prettier/prettier-eslint).

> Prettier is an opinionated JavaScript formatter inspired by refmt with advanced support for language features from ES2017, JSX, and Flow. It removes all original styling and ensures that all outputted JavaScript conforms to a consistent style. (See this blog post)


## Usage

Simply pipe the input.

```js
const gulp = require('gulp'),
  prettierEslint = require('gulp-prettier-eslint');

gulp.task('default', () => {
	gulp.src('*.js')
	.pipe(prettierEslint())
	.pipe(gulp.dest('./dist'))
});
```

## License

[MIT License](https://raw.githubusercontent.com/bhargavrpatel/gulp-prettier/master/LICENSE)
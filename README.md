# See [rollup-starter-lib](https://github.com/rollup/rollup-starter-lib) and [rollup-starter-app](https://github.com/rollup/rollup-starter-app) for a simpler, up-to-date example of how to create a library or application with Rollup

---

# rollup-starter-project

This package shows how to get started with [rollup][rollup] (and [babel][babel]) for writing
npm packages using ES6 modules. Writing npm packages with a [jsnext:main][jsnext:main] allows
users of your package to choose whether they use it using the traditional
`require` function understood by node.js, or using the `import` statement added
in ES6 which can result in smaller bundles through live-code inclusion static
analysis.

[babel]: https://github.com/babel/babel
[jsnext:main]: https://github.com/rollup/rollup/wiki/jsnext:main
[rollup]: https://github.com/rollup/rollup

## Usage

You can simply use this project as inspiration for how to configure your own,
or clone it and edit the metadata files when starting your own project (i.e.
README.md, package.json, and LICENSE).

### lib/index.js

This is the main source file in your application, and the main file you'll start
editing to implement the functionality of your package. As shown in this
example, you can `import` other files from this file similarly to how you would
`require` packages typically (e.g. `lib/utils.js`).

### test/index_test.js

This is the starting point for tests in your package. You should import the
code to test from `lib/` as shown in the example. The project is already
configured to use mocha when you run `npm test`.

### dist/rollup-starter-project.js

This is the `main` file of the package and includes all the code needed to run
your package. It is in UMD format, meaning it can be used in most JavaScript
runtime environments. If your package has dependencies you do not want bundled,
be sure to configure rollup to exclude them by marking them as `external`. By
default all `dependencies` entries in your `package.json` will be `external`.

### dist/rollup-starter-project.mjs

This is the `jsnext:main` file of the package and includes all the code needed
to run your package. Compared to the UMD version, this one preserves ES6 imports
and exports at the package boundary for tools that support it (such as rollup).
If your package has dependencies you do not want bundled, be sure to configure
rollup to exclude them by marking them as `external`. By default all
`dependencies` entries in your `package.json` will be `external`.

### .eslintrc

This controls how the package is linted and starts off with the recommended set
of rules from eslint itself. It also uses `babel-eslint` to parse your code,
allowing syntax that the standard eslint parser may not understand (e.g. type
annotations).

## Dependencies

This section explains what all the dependencies are and what they're for, so
you can decide which ones you actually need.

### babel-eslint

Enables eslint to understand all JavaScript syntax that
[babel](http://babeljs.io) understands, and adds a few rules for linting ES2015
code. This can be removed if you plan not to use babel to transform ES2015 code
to ES5 or if you plan not to use eslint.

### babel-plugin-external-helpers

Ensures that only one copy of each babel helper is included in the bundle when
used with rollup. This can be removed if you plan not to use babel to transform
ES2015 code to ES5.

### babel-preset-es2015

Used when babel is used without rollup, and referenced by the `.babelrc` file.
This can be removed if you plan not to use babel to transform ES2015 code to ES5
or you plan to specify all the babel plugins manually.

### babel-register

Provides on-demand transpilation via babel so no precompilation is required.
This is used in the tests to allow running them without compiling first, and is
referenced in `test/mocha.opts`.

### babelrc-rollup

Handles transforming the babel config from `.babelrc` to one suitable for use
with `rollup-plugin-babel`, where you don't want to use any module plugins.

### eslint

[eslint](http://eslint.org) checks your code for common errors and ensures it
adheres to the style you configure in `.eslintrc`. You can remove this if you
plan not to lint your code or if you're using another linter, such as
[jshint](http://jshint.com) or [jscs](http://jscs.info).

### mocha

[mocha](https://mochajs.org) is a test runner. You can remove this if you plan
not to write tests (don't do that!) or if you plan to use another test runner
such as [Jasmine](http://jasmine.github.io).

### istanbul

[istanbul](https://github.com/gotwarlost/istanbul) is a code coverage tool that 
computes statement, line, function and branch coverage with module loader hooks 
to transparently add coverage when running tests. You can remove this dependency 
if you won't be writing tests or you don't care about code coverage.

You'll also have to change the `test/mocha.opts` file and remove the custom 
reporter option `--reporter test/istanbul.reporter.js`. After that you can safely 
delete the `test/istanbul.reporter.js` file.

### rollup

[rollup](http://rollupjs.org) is a JavaScript module bundler and the reason
you're looking at this project in the first place, so you probably don't want
to remove this dependency.

### rollup-plugin-babel

This plugin enables support for [babel](http://babeljs.io), which transforms
ES2015 code to ES5. You can remove this if you plan not to use ES2015 code.

### rollup-plugin-istanbul

This plugin provides seamless integration between Rollup and 
[Istanbul](https://github.com/gotwarlost/istanbul) to generate code coverage
reports of your project. If you don't plan to write tests or simply don't care 
about code coverage, you can safely remove this along with Istanbul.

Just like with the Istanbul dependency, you should change the `test/mocha.opts`
file. Read the above instructions for removing Istanbul.

## Contributing

If you think a project built with rollup should be set up differently, open an
issue to discuss it or create a pull request.

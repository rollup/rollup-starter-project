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

This is the ES6 entry point of your application, and the main file you'll start
editing to implement the functionality of your package. As shown in this
example, you can `import` other files from this file similarly to how you would
`require` packages typically (e.g. `lib/utils.js`).

### test/index_test.js

This is the starting point for tests in your package. You should import the
code to test from `lib/` as shown in the example. The project is already
configured to use mocha when you run `npm test`.

### dist/rollup-starter-project.js

This is the result of building a UMD bundle that includes all the code needed
to run your package. If your package has dependencies you do not want bundled,
be sure to configure rollup to exclude them by marking them as `external`.

### .eslintrc

This controls how the package is linted and starts off with the recommended set
of rules from eslint itself. It also uses `babel-eslint` to parse your code,
allowing syntax that the standard eslint parser may not understand (e.g. type
annotations).

## Contributing

If you think a project built with rollup should be set up differently, open an
issue to discuss it or create a pull request.

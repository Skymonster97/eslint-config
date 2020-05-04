"use strict";

const plugins = [
  "array-func",
  "eslint-comments",
  "html",
  "import",
  "jsdoc",
  "json",
  "markdown",
  "node",
  "promise",
  "sonarjs",
  "unicorn",
];

const paths = plugins
  .filter(a => {
    try {
      require(`eslint-plugin-${a}`);
      return true;
    } catch {
      return false;
    }
  })
  .map(a => `./rules/${a}.js`);

module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 11,
    "sourceType": "script",
  },
  "env": {
    "es6": true,
    "es2017": true,
    "es2020": true,
  },
  "rules": {
    "strict": ["error", "global"],
  },
  "overrides": [
    {
      "files": ["*.mjs", "*.mjs.js"],
      "parserOptions": {
        "sourceType": "module",
      },
      "rules": {
        "strict": ["error", "never"],
      },
    },
  ],
  "ignorePatterns": [
    "node_modules/",
  ],
  "extends": [
    "./rules/eslint.js",
    ...paths,
  ].map(require.resolve),
};

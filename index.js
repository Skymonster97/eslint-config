"use strict";

const { generatePaths, resolveParser } = require("./src/util.js");

const optional = generatePaths(name => `./rules/${name}.js`);

module.exports = {
  "parser": resolveParser(),
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "script",
  },
  "env": {
    "es6": true,
    "es2017": true,
    "es2020": true,
    "es2021": true,
  },
  "overrides": [
    {
      "files": [
        "**.js",
        "**.cjs",
        "**.cjs.js",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
    {
      "files": [
        "**.mjs",
        "**.mjs.js",
      ],
      "parserOptions": {
        "sourceType": "module",
      },
    },
  ],
  "ignorePatterns": [
    "node_modules/",
  ],
  "extends": [
    "./rules/eslint.js",
    ...optional,
  ].map(require.resolve),
};

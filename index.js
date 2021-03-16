"use strict";

const { join } = require("path");
const { generatePaths, resolveParser } = require("./src/util.js");
const pluginsNames = require("./src/plugins.js");

const optional = generatePaths(
  pluginsNames,
  name => join(__dirname, `rules/${name}.js`),
  "eslint-plugin-",
);

module.exports = {
  "parser": resolveParser("esprima", ["@babel/eslint-parser"]),
  "parserOptions": {
    "ecmaVersion": 12,
    "sourceType": "script",
    "requireConfigFile": false,
    "babelOptions": {
      "configFile": require.resolve("./babel.config.json"),
    },
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
        "**/*.js",
        "**/*.cjs",
        "**/*.cjs.js",
      ],
      "parserOptions": {
        "sourceType": "script",
      },
    },
    {
      "files": [
        "**/*.mjs",
        "**/*.mjs.js",
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

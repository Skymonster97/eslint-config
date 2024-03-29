"use strict";

const { join } = require("path");
const { generatePaths, resolveParser } = require("./src/util.js");
const pluginsNames = require("./src/plugins.js");

const optional = generatePaths(
  pluginsNames.CJS,
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
      "configFile": require.resolve("./babel.config.js"),
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
  ],
  "ignorePatterns": [
    "node_modules/",
  ],
  "extends": [
    "./rules/eslint.js",
    ...optional,
  ].map(require.resolve),
};

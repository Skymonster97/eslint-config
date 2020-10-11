"use strict";

const { generatePaths } = require("./src/util.js");

const optional = generatePaths(name => `./rules/esm/${name}.js`);

module.exports = {
  "parserOptions": {
    "sourceType": "module",
  },
  "extends": [
    "./index.js",
    ...optional,
  ],
};

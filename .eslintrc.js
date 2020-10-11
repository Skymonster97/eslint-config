"use strict";

module.exports = {
  "env": {
    "node": true,
  },
  "rules": {
    "indent": ["error", 2],
    "array-bracket-newline": "off",
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],
  },
  "extends": require.resolve("./index.js"),
};

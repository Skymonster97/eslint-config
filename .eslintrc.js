"use strict";

module.exports = {
  "rules": {
    "indent": ["error", 2],
    "array-bracket-newline": "off",
    "quotes": ["error", "double"],
    "quote-props": ["error", "consistent"],
  },
  "overrides": [
    {
      "files": ["!*.js"],
      "rules": {
        "strict": "off",
      },
    },
  ],
  "extends": require.resolve("./index.js"),
};

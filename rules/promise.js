"use strict";

const rules = {
  "promise/always-return": "off",
  "promise/avoid-new": "off",
  "promise/catch-or-return": "off",
  "promise/no-callback-in-promise": "off",
  "promise/no-native": "off",
  "promise/no-nesting": "off",
  "promise/no-new-statics": "error",
  "promise/no-promise-in-callback": "off",
  "promise/no-return-in-finally": "off",
  "promise/no-return-wrap": "error",
  "promise/param-names": "error",
  "promise/prefer-await-to-callbacks": "off",
  "promise/prefer-await-to-then": "off",
  "promise/valid-params": "error",
};

module.exports = {
  plugins: ["eslint-plugin-promise"],
  rules,
};

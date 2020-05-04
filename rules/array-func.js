"use strict";

const rules = {
  "array-func/avoid-reverse": "error",
  "array-func/from-map": "error",
  "array-func/no-unnecessary-this-arg": "error",
  "array-func/prefer-array-from": "off", // unicorn alt
  "array-func/prefer-flat-map": "off", // unicorn alt
  "array-func/prefer-flat": "error",
};

module.exports = {
  plugins: ["eslint-plugin-array-func"],
  rules,
};

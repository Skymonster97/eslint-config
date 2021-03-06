"use strict";

const settings = {
  "jsdoc": {
    "tagNamePreference": {
      "property": "prop",
      "return": "returns",
      "yield": "yields",
      "arg": "param",
      "argument": "param",
      "function": "method",
      "augments": "extends",
    },
    "preferredTypes": {
      "String": "string",
      "Number": "number",
      "bigint": "BigInt",
      "Boolean": "boolean",
      "Symbol": "symbol",
      "object": "Object",
      "function": "Function",
      "array": "Array",
      "date": "Date",
      "regexp": "RegExp",
      "error": "Error",
      "null": "void",
      "undefined": "void",
    },
  },
};

const rules = {
  "jsdoc/check-access": "warn",
  "jsdoc/check-alignment": "warn",
  "jsdoc/check-examples": ["error", {
    "paddedIndent": 0,
  }],
  "jsdoc/check-indentation": ["warn", {
    "excludeTags": ["example"],
  }],
  "jsdoc/check-line-alignment": ["error", "never"],
  "jsdoc/check-param-names": "warn",
  "jsdoc/check-property-names": "warn",
  "jsdoc/check-syntax": "warn",
  "jsdoc/check-tag-names": "warn",
  "jsdoc/check-types": "warn",
  "jsdoc/check-values": "warn",
  "jsdoc/empty-tags": "warn",
  "jsdoc/implements-on-classes": "warn",
  "jsdoc/match-description": "off",
  "jsdoc/newline-after-description": ["warn", "never"],
  "jsdoc/no-bad-blocks": "off", // TypeError: Cannot read property 'tags' of undefined
  "jsdoc/no-defaults": "off",
  "jsdoc/no-types": "off",
  "jsdoc/no-undefined-types": "warn",
  "jsdoc/require-description-complete-sentence": "off",
  "jsdoc/require-description": "off",
  "jsdoc/require-example": "off",
  "jsdoc/require-file-overview": "off",
  "jsdoc/require-hyphen-before-param-description": "warn",
  "jsdoc/require-jsdoc": "off",
  "jsdoc/require-param-description": "warn",
  "jsdoc/require-param-name": "warn",
  "jsdoc/require-param-type": "warn",
  "jsdoc/require-param": "warn",
  "jsdoc/require-property-description": "warn",
  "jsdoc/require-property-name": "warn",
  "jsdoc/require-property-type": "warn",
  "jsdoc/require-property": "warn",
  "jsdoc/require-returns-check": "warn",
  "jsdoc/require-returns-description": "off",
  "jsdoc/require-returns-type": "warn",
  "jsdoc/require-returns": "warn",
  "jsdoc/require-throws": "off",
  "jsdoc/valid-types": "warn",
};

module.exports = {
  plugins: ["eslint-plugin-jsdoc"],
  settings,
  rules,
};

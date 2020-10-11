"use strict";

const rules = {
  "sonarjs/cognitive-complexity": "off",
  "sonarjs/max-switch-cases": "off",
  "sonarjs/no-all-duplicated-branches": "error",
  "sonarjs/no-collapsible-if": "warn",
  "sonarjs/no-collection-size-mischeck": "error",
  "sonarjs/no-duplicate-string": "off",
  "sonarjs/no-duplicated-branches": "error",
  "sonarjs/no-element-overwrite": "error",
  "sonarjs/no-extra-arguments": "error",
  "sonarjs/no-identical-conditions": "off", // eslint alt
  "sonarjs/no-identical-expressions": "off", // eslint alt
  "sonarjs/no-identical-functions": "error",
  "sonarjs/no-inverted-boolean-check": "error",
  "sonarjs/no-one-iteration-loop": "error",
  "sonarjs/no-redundant-boolean": "error",
  "sonarjs/no-redundant-jump": "off", // eslint alt
  "sonarjs/no-same-line-conditional": "error",
  "sonarjs/no-small-switch": "error",
  "sonarjs/no-unused-collection": "error",
  "sonarjs/no-use-of-empty-return-value": "error",
  "sonarjs/no-useless-catch": "off", // eslint alt
  "sonarjs/prefer-immediate-return": "error",
  "sonarjs/prefer-object-literal": "error",
  "sonarjs/prefer-single-boolean-return": "error",
  "sonarjs/prefer-while": "error",
};

module.exports = {
  plugins: ["eslint-plugin-sonarjs"],
  rules,
};

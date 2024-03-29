"use strict";

const rules = {
  "strict": ["error", "global"],
  //
  // Possible Errors
  //
  "for-direction": "error",
  "getter-return": "error",
  "no-async-promise-executor": "error",
  "no-await-in-loop": "error",
  "no-compare-neg-zero": "error",
  "no-cond-assign": "error",
  "no-console": "warn",
  "no-constant-condition": "error",
  "no-control-regex": "error",
  "no-debugger": "error",
  "no-dupe-args": "error",
  "no-dupe-else-if": "error",
  "no-dupe-keys": "error",
  "no-duplicate-case": "error",
  "no-empty": ["error", {
    "allowEmptyCatch": true,
  }],
  "no-empty-character-class": "error",
  "no-ex-assign": "error",
  "no-extra-boolean-cast": "error",
  "no-extra-parens": ["error", "all", {
    "conditionalAssign": false,
    "returnAssign": false,
    "nestedBinaryExpressions": false,
    "ignoreJSX": "none",
    "enforceForArrowConditionals": true,
    "enforceForSequenceExpressions": false,
    "enforceForNewInMemberExpressions": true,
  }],
  "no-extra-semi": "error",
  "no-func-assign": "error",
  "no-import-assign": "error",
  "no-inner-declarations": "error",
  "no-invalid-regexp": "error",
  "no-irregular-whitespace": "error",
  "no-loss-of-precision": "error",
  "no-misleading-character-class": "error",
  "no-obj-calls": "error",
  "no-promise-executor-return": "off",
  "no-prototype-builtins": "error",
  "no-regex-spaces": "error",
  "no-setter-return": "error",
  "no-sparse-arrays": "error",
  "no-template-curly-in-string": "warn",
  "no-unexpected-multiline": "error",
  "no-unreachable": "error",
  "no-unreachable-loop": "error",
  "no-unsafe-finally": "error",
  "no-unsafe-negation": "error",
  "no-unsafe-optional-chaining": ["error", {
    "disallowArithmeticOperators": true,
  }],
  "no-useless-backreference": "error",
  "require-atomic-updates": "error",
  "use-isnan": "error",
  "valid-typeof": ["error", {
    "requireStringLiterals": true,
  }],
  //
  // Best Practices
  //
  "accessor-pairs": ["error", {
    "enforceForClassMembers": true,
  }],
  "array-callback-return": "error",
  "block-scoped-var": "error",
  "class-methods-use-this": "off",
  "complexity": "off",
  "consistent-return": "error",
  "curly": ["error", "multi-line"],
  "default-case": "off",
  "default-case-last": "error",
  "default-param-last": "warn",
  "dot-location": ["error", "property"],
  "dot-notation": "off",
  "eqeqeq": ["error", "always", {
    "null": "ignore",
  }],
  "grouped-accessor-pairs": ["error", "getBeforeSet"],
  "guard-for-in": "error",
  "max-classes-per-file": "off",
  "no-alert": "error",
  "no-caller": "error",
  "no-case-declarations": "error",
  "no-constructor-return": "off",
  "no-div-regex": "warn",
  "no-else-return": ["error", {
    "allowElseIf": true,
  }],
  "no-empty-function": "warn",
  "no-empty-pattern": "error",
  "no-eq-null": "off",
  "no-eval": "warn",
  "no-extend-native": "error",
  "no-extra-bind": "error",
  "no-extra-label": "error",
  "no-fallthrough": "error",
  "no-floating-decimal": "error",
  "no-global-assign": "error",
  "no-implicit-coercion": ["error", {
    "allow": ["!!"],
  }],
  "no-implicit-globals": "error",
  "no-implied-eval": "error",
  "no-invalid-this": "warn",
  "no-iterator": "error",
  "no-labels": "error",
  "no-lone-blocks": "warn",
  "no-loop-func": "error",
  "no-magic-numbers": "off",
  "no-multi-spaces": "error",
  "no-multi-str": "error",
  "no-new": "error",
  "no-new-func": "warn",
  "no-new-wrappers": "warn",
  "no-nonoctal-decimal-escape": "warn",
  "no-octal": "error",
  "no-octal-escape": "error",
  "no-param-reassign": "off",
  "no-proto": "error",
  "no-redeclare": "error",
  "no-restricted-properties": "off",
  "no-return-assign": "error",
  "no-return-await": "off",
  "no-script-url": "error",
  "no-self-assign": ["error", {
    "props": true,
  }],
  "no-self-compare": "error",
  "no-sequences": "error",
  "no-throw-literal": "error",
  "no-unmodified-loop-condition": "error",
  "no-unused-expressions": ["error", {
    "allowTernary": true,
  }],
  "no-unused-labels": "error",
  "no-useless-call": "error",
  "no-useless-catch": "error",
  "no-useless-concat": "error",
  "no-useless-escape": "error",
  "no-useless-return": "error",
  "no-void": "off",
  "no-warning-comments": "off",
  "no-with": "error",
  "prefer-named-capture-group": "off",
  "prefer-promise-reject-errors": ["error", {
    "allowEmptyReject": true,
  }],
  "prefer-regex-literals": "error",
  "radix": ["error", "as-needed"],
  "require-await": "error",
  "require-unicode-regexp": "off",
  "vars-on-top": "error",
  "wrap-iife": ["error", "inside", {
    "functionPrototypeMethods": false,
  }],
  "yoda": ["error", "never"],
  //
  // Variables
  //
  "init-declarations": "off",
  "no-delete-var": "error",
  "no-label-var": "error",
  "no-restricted-globals": "off",
  "no-shadow": "warn",
  "no-shadow-restricted-names": "error",
  "no-undef": ["error", {
    "typeof": true,
  }],
  "no-undef-init": "warn",
  "no-undefined": "off",
  "no-unused-vars": ["warn", {
    "vars": "all",
    "args": "after-used",
    "ignoreRestSiblings": true,
    "caughtErrors": "none",
  }],
  "no-use-before-define": ["error", {
    "functions": false,
    "classes": true,
    "variables": true,
  }],
  //
  // Stylistic Issues
  //
  "array-bracket-newline": ["error", {
    "multiline": true,
  }],
  "array-bracket-spacing": ["error", "never"],
  "array-element-newline": ["error", "consistent"],
  "block-spacing": ["error", "always"],
  "brace-style": ["error", "1tbs", {
    "allowSingleLine": true,
  }],
  "camelcase": "off",
  "capitalized-comments": "off",
  "comma-dangle": ["error", "always-multiline"],
  "comma-spacing": ["error", {
    "before": false,
    "after": true,
  }],
  "comma-style": ["error", "last"],
  "computed-property-spacing": ["error", "never", {
    "enforceForClassMembers": true,
  }],
  "consistent-this": ["error", "that"],
  "eol-last": ["error", "always"],
  "func-call-spacing": ["error", "never"],
  "func-name-matching": ["error", {
    "considerPropertyDescriptor": true,
  }],
  "func-names": ["error", "always"],
  "func-style": ["error", "declaration", {
    "allowArrowFunctions": true,
  }],
  "function-call-argument-newline": ["error", "consistent"],
  "function-paren-newline": ["error", "consistent"],
  "id-denylist": "off",
  "id-length": "off",
  "id-match": "off",
  "implicit-arrow-linebreak": ["error", "beside"],
  "indent": ["error", 4, {
    "SwitchCase": 1,
    "VariableDeclarator": { "var": 1, "let": 1, "const": 1 },
    "outerIIFEBody": 1,
    "MemberExpression": 1,
    "FunctionDeclaration": { "parameters": 1, "body": 1 },
    "FunctionExpression": { "parameters": 1, "body": 1 },
    "CallExpression": { "arguments": 1 },
    "ArrayExpression": 1,
    "ObjectExpression": 1,
    "ImportDeclaration": 1,
    "flatTernaryExpressions": true,
    "ignoreComments": false,
  }],
  "jsx-quotes": "off",
  "key-spacing": ["error", {
    "beforeColon": false,
    "afterColon": true,
    "mode": "strict",
  }],
  "keyword-spacing": ["error", {
    "before": true,
    "after": true,
  }],
  "line-comment-position": "off",
  "linebreak-style": ["error", "unix"],
  "lines-around-comment": "off",
  "lines-between-class-members": ["error", "always", {
    "exceptAfterSingleLine": true,
  }],
  "max-depth": "off",
  "max-len": "off",
  "max-lines": "off",
  "max-lines-per-function": "off",
  "max-nested-callbacks": "off",
  "max-params": "off",
  "max-statements": "off",
  "max-statements-per-line": "off",
  "multiline-comment-style": "off",
  "multiline-ternary": "off",
  "new-cap": "off",
  "new-parens": ["error", "always"],
  "newline-per-chained-call": "off",
  "no-array-constructor": "warn",
  "no-bitwise": "warn",
  "no-continue": "off",
  "no-inline-comments": "off",
  "no-lonely-if": "off",
  "no-mixed-operators": "error",
  "no-mixed-spaces-and-tabs": "error",
  "no-multi-assign": "off",
  "no-multiple-empty-lines": ["warn", {
    "max": 1,
    "maxEOF": 0,
    "maxBOF": 0,
  }],
  "no-negated-condition": "warn",
  "no-nested-ternary": "off",
  "no-new-object": "warn",
  "no-plusplus": "off",
  "no-restricted-syntax": "off",
  "no-tabs": "error",
  "no-ternary": "off",
  "no-trailing-spaces": "error",
  "no-underscore-dangle": "off",
  "no-unneeded-ternary": "error",
  "no-whitespace-before-property": "error",
  "nonblock-statement-body-position": ["error", "beside"],
  "object-curly-newline": ["error", {
    "ObjectExpression": { "consistent": true },
    "ObjectPattern": { "multiline": true },
    "ImportDeclaration": { "multiline": true },
    "ExportDeclaration": { "multiline": true },
  }],
  "object-curly-spacing": ["error", "always"],
  "object-property-newline": ["error", {
    "allowAllPropertiesOnSameLine": true,
  }],
  "one-var": ["error", {
    "var": undefined,
    "let": undefined,
    "const": undefined,
    "separateRequires": true,
  }],
  "one-var-declaration-per-line": ["error", "initializations"],
  "operator-assignment": ["error", "always"],
  "operator-linebreak": ["error", "before"],
  "padded-blocks": ["warn", "never"],
  "padding-line-between-statements": ["error",
    // directives
    { "blankLine": "always", "prev": "directive", "next": "*" },
    { "blankLine": "any", "prev": "directive", "next": "directive" },
    // Node.js export
    { "blankLine": "always", "prev": "*", "next": "cjs-export" },
    { "blankLine": "always", "prev": "cjs-export", "next": "*" },
    { "blankLine": "any", "prev": "cjs-export", "next": "cjs-export" },
    // ES import
    { "blankLine": "always", "prev": "*", "next": "import" },
    { "blankLine": "always", "prev": "import", "next": "*" },
    { "blankLine": "any", "prev": "import", "next": "import" },
    // ES export
    { "blankLine": "always", "prev": "*", "next": "export" },
    { "blankLine": "always", "prev": "export", "next": "*" },
    { "blankLine": "any", "prev": "export", "next": "export" },
    // switch
    { "blankLine": "any", "prev": "switch", "next": "case" },
  ],
  "prefer-exponentiation-operator": "error",
  "prefer-object-spread": "error",
  "quote-props": ["error", "consistent-as-needed"],
  "quotes": ["error", "single"],
  "semi": ["error", "always"],
  "semi-spacing": ["error", {
    "before": false,
    "after": true,
  }],
  "semi-style": ["error", "last"],
  "sort-keys": "off",
  "sort-vars": "off",
  "space-before-blocks": ["error", "always"],
  "space-before-function-paren": ["error", {
    "anonymous": "always",
    "named": "never",
    "asyncArrow": "always",
  }],
  "space-in-parens": ["error", "never"],
  "space-infix-ops": "error",
  "space-unary-ops": "error",
  "spaced-comment": ["error", "always"],
  "switch-colon-spacing": ["error", {
    "after": true,
    "before": false,
  }],
  "template-tag-spacing": ["error", "always"],
  "unicode-bom": ["error", "never"],
  "wrap-regex": "off",
  //
  // ECMAScript 6
  //
  "arrow-body-style": "off",
  "arrow-parens": ["error", "as-needed"],
  "arrow-spacing": ["error", {
    "before": true,
    "after": true,
  }],
  "constructor-super": "error",
  "generator-star-spacing": ["error", {
    "before": true,
    "after": true,
    "anonymous": {
      "before": true,
      "after": false,
    },
    "method": {
      "before": true,
      "after": true,
    },
  }],
  "no-class-assign": "error",
  "no-confusing-arrow": "off",
  "no-const-assign": "error",
  "no-dupe-class-members": "error",
  "no-duplicate-imports": "error",
  "no-new-symbol": "error",
  "no-restricted-exports": "off",
  "no-restricted-imports": "off", // node alt
  "no-this-before-super": "error",
  "no-useless-computed-key": ["error", {
    "enforceForClassMembers": true,
  }],
  "no-useless-constructor": "error",
  "no-useless-rename": "error",
  "no-var": "error",
  "object-shorthand": ["error", "always"],
  "prefer-arrow-callback": "error",
  "prefer-const": ["error", {
    "destructuring": "all",
  }],
  "prefer-destructuring": "off",
  "prefer-numeric-literals": "error",
  "prefer-rest-params": "error",
  "prefer-spread": "error",
  "prefer-template": "error",
  "require-yield": "warn",
  "rest-spread-spacing": ["error", "never"],
  "sort-imports": "off",
  "symbol-description": "error",
  "template-curly-spacing": ["error", "never"],
  "yield-star-spacing": ["error", "both"],
};

module.exports = {
  rules,
};

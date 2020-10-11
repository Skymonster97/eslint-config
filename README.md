## Setup

`.eslintrc`

for CJS enviroment:

```json
{
  "extends": "@skymonster97/eslint-config"
}
```

for ESM enviroment:

```json
{
  "extends": "@skymonster97/eslint-config/module"
}
```

---

`package.json`
<!-- markdownlint-disable MD029 -->
1. ESLint
<!-- markdownlint-enable MD029 -->
```json
{
  "devDependencies": {
    "eslint": "*"
  }
}
```
<!-- markdownlint-disable MD029 -->
2. Parser (optional)
<!-- markdownlint-enable MD029 -->
```json
{
  "devDependencies": {
    "babel-eslint": "*"
  }
}
```
<!-- markdownlint-disable MD029 -->
3. Plugins (optional)
<!-- markdownlint-enable MD029 -->
```json
{
  "devDependencies": {
    "eslint-plugin-array-func": "*",
    "eslint-plugin-eslint-comments": "*",
    "eslint-plugin-html": "*",
    "eslint-plugin-import": "*",
    "eslint-plugin-jsdoc": "*",
    "eslint-plugin-json": "*",
    "eslint-plugin-markdown": "*",
    "eslint-plugin-node": "*",
    "eslint-plugin-promise": "*",
    "eslint-plugin-sonarjs": "*",
    "eslint-plugin-unicorn": "*"
  }
}
```

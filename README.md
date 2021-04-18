<!-- markdownlint-disable first-line-h1 -->

## Installation

```cmd
npm install github:Skymonster97/eslint-config --save-dev
```

## Setup

- ### File `.eslintrc`

  - For CJS enviroment:

    ```json
    {
      "extends": "@skymonster97/eslint-config"
    }
    ```

  - For ESM enviroment:

    ```json
    {
      "extends": "@skymonster97/eslint-config/module"
    }
    ```

- ### File `package.json`

  - Linter

    ```json
    {
      "devDependencies": {
        "eslint": "^7.22.0"
      }
    }
    ```

  - Parser (optional)

    ```json
    {
      "devDependencies": {
        "@babel/eslint-parser": "^7.13.10"
      }
    }
    ```

  - Plugins (each optional)

    ```json
    {
      "devDependencies": {
        "@babel/plugin-proposal-class-properties": "^7.13.0",
        "eslint-plugin-array-func": "^3.1.7",
        "eslint-plugin-eslint-comments": "^3.2.0",
        "eslint-plugin-html": "^6.1.2",
        "eslint-plugin-import": "^2.22.1",
        "eslint-plugin-jsdoc": "^32.2.0",
        "eslint-plugin-json": "^2.1.2",
        "eslint-plugin-json-files": "^0.8.1",
        "eslint-plugin-markdown": "^2.0.0",
        "eslint-plugin-node": "^11.1.0",
        "eslint-plugin-promise": "^4.3.1",
        "eslint-plugin-sonarjs": "^0.6.0",
        "eslint-plugin-unicorn": "^28.0.2"
      }
    }
    ```

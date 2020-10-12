# Setup

- `.eslintrc` file

  - for CJS enviroment:

    ```json
    {
      "extends": "@skymonster97/eslint-config"
    }
    ```

  - for ESM enviroment:

    ```json
    {
      "extends": "@skymonster97/eslint-config/module"
    }
    ```

- `package.json` file

  - Linter

    ```json
    {
      "devDependencies": {
        "eslint": "*"
      }
    }
    ```

  - Parser (optional)

    ```json
    {
      "devDependencies": {
        "babel-eslint": "*"
      }
    }
    ```

  - Plugins (each optional)

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

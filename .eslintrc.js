module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "max-len": [
            "error",
            {
                code: 120,
                ignoreComments: true,
                ignoreUrls: true,
                ignoreRegExpLiterals: true,
            },
        ],
        "vue/html-indent": [
            "error",
            4
        ],
        "vue/max-len": [
            "error",
            {
                "code": 120,
                "template": 120,
                "tabWidth": 4,
                "comments": 120,
                "ignorePattern": "",
                "ignoreComments": false,
                "ignoreTrailingComments": false,
                "ignoreUrls": false,
                "ignoreStrings": false,
                "ignoreTemplateLiterals": true,
                "ignoreRegExpLiterals": true,
                "ignoreHTMLAttributeValues": true,
                "ignoreHTMLTextContents": false,
            },
        ],
        "vue/script-indent": [
            "error",
            4,
            {
                "baseIndent": 0,
            },
        ],
    }
}

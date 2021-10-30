module.exports = {
    'env': {
        'es2021': true,
        'browser': true,
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 12,
        'sourceType': 'module'
    },
    'plugins': ['react'],
    'rules': {
        'react/prop-types': 0,
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'max-lines': ['error', 150],
        'multiline-comment-style': ['error', 'starred-block']
    }
}
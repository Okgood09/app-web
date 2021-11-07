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
        'no-irregular-whitespace': ['error'],
        'eqeqeq': ['error', 'always'],
        'no-empty-function': ['error'],
        'curly': ['error', 'multi'],
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'block-spacing': ['error'],
        'no-duplicate-imports': ['error'],
        'object-property-newline': ['error']
    }
}

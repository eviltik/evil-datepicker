module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'node': true
  },
  extends: 'eslint:recommended',
  parserOptions: {
    'ecmaVersion': 2020,
    'sourceType': 'module',
    'ecmaFeatures': {
      'jsx': true
    }
  },
  rules: {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    //'semi': ['error', 'warn'],
    'no-unused-vars': ['warn', 'all'],
    'no-var': ['warn'],
    'no-console': 'off',
    'object-curly-spacing':['error','always'],
    //'space-in-parens':[ 'error','always' ],
    'no-throw-literal': [ 'error' ], 
    'prefer-const': [ 'error', { 'destructuring': 'any', 'ignoreReadBeforeAssign': false } ],
    //'padded-blocks': ['error', 'always']
  },
  ignorePatterns: [
    '**/node_modules',
    '**/.pnpm-store',
  ],
  globals:{
    '__dirname':true
  }
};

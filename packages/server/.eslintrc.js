const pathJoin = require('path').join;

module.exports = {
  env: {
    es2021: true,
    commonjs: true,
    'jest/globals': true,
  },
  extends: pathJoin(__dirname, '../../.eslintrc.js'),
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      sourceType: 'module',
      ecmaVersion: 2020,
    },
  },
};

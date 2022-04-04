const pathJoin = require('path').join;

module.exports = {
  extends: pathJoin(__dirname, '../../.eslintrc.js'),
  plugins: ['react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};

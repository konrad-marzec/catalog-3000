const pathJoin = require('path').join;

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      sourceType: 'module',
      ecmaVersion: 2020,
      jsx: true,
    },
    project: [
      pathJoin(__dirname, './packages/client/tsconfig.json'),
      pathJoin(__dirname, './packages/server/tsconfig.json'),
      pathJoin(__dirname, './packages/ui-toolkit/tsconfig.json'),
    ],
  },
  plugins: ['jest', 'prettier'],
  extends: [
    'xo',
    'prettier',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended',
    'plugin:import/typescript',
    'eslint-config-xo-typescript',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',

    'capitalized-comments': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/naming-convention': 'off',

    // Defer to Prettier
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    '@typescript-eslint/space-before-function-paren': 'off',
  },
};

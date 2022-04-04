module.exports = {
  ignore: ['**/*.test.ts', '**/*.test.tsx', '__mocks__'],
  plugins: ['macros', ['babel-plugin-styled-components', { namespace: 'ui-toolkit' }]],
  presets: [['@babel/preset-react', { runtime: 'automatic' }], '@babel/preset-typescript'],
  env: {
    esm: {
      presets: [
        [
          '@babel/preset-env',
          {
            loose: true,
            modules: false,
          },
        ],
      ],
    },
    cjs: {
      presets: [
        [
          '@babel/env',
          {
            useBuiltIns: 'usage',
            corejs: 3,
          },
        ],
      ],
    },
  },
};

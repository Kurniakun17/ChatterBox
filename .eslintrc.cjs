module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs,jsx}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-expressions': 'off',
    'consistent-return': 'off',
    'import/prefer-default-export': ['off', { target: 'any' }],
    'comma-dangle': 'off',
    'react/prop-types': 0,
    'react/button-has-type': 0,
    'import/no-extraneous-dependencies': 0,
  },
};

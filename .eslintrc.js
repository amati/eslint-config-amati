module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:promise/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  plugins: ['html'],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  globals: {},
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};

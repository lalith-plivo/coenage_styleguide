module.exports = {
  extends: ['mantine', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
    'arrow-body-style': 0,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};

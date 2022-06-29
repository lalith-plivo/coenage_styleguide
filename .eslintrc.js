module.exports = {
  extends: ['cestyle', 'plugin:jest/recommended'],
  plugins: ['jest'],
  rules: {
    'jest/no-export': 'off',
    'jest/expect-expect': 'off',
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};

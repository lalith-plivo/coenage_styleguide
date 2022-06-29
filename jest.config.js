module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    // https://github.com/aelbore/esbuild-jest/issues/21
    '^.+\\.tsx?$': '@sucrase/jest-plugin',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./configuration/jest/jsdom.mocks.js'],
  moduleNameMapper: {
    '@cestyle/core/src/styles.api': '<rootDir>/src/cestyle-core/src/styles.api',
    '@cestyle/(.*)': '<rootDir>/src/cestyle-$1/src',
  },
};

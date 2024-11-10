export default {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': 'esbuild-jest',
  },
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['./jsdom.mocks.ts', './jest.react.ts'],
  globalSetup: './jest.setup.ts',
  moduleNameMapper: {
    '@raikou/(.*)': '<rootDir>/packages/@raikou/$1/src',
    '@raikou-tests/(.*)': '<rootDir>/packages/@raikou-tests/$1/src',
    '\\.(css)$': 'identity-obj-proxy',
    '(\\.+/.+)\\.js$': '$1',
  },
};

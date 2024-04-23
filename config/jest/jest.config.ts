import path from 'path';

import type { Config } from 'jest';

const paths = {
  rootDir: path.resolve(__dirname, '..', '..'),
};

const jestConfig: Config = {
  clearMocks: true,
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  coverageProvider: 'v8',
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/src'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.svg$': '<rootDir>/config/jest/svgMock.tsx',
    '@/(.*)': '<rootDir>/src/$1',
  },
  modulePaths: ['<rootDir>/src'],
  rootDir: paths.rootDir,
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],
  testPathIgnorePatterns: ['\\\\node_modules\\\\'],
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          transform: {
            react: {
              runtime: 'automatic',
            },
          },
        },
      },
    ],
  },
  transformIgnorePatterns: ['\\\\node_modules\\\\', '\\.pnp\\.[^\\\\]+$'],
  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/jest-html-report',
        filename: 'report.html',
        openReport: false,
        inlineSource: true,
      },
    ],
  ],
};

export default jestConfig;

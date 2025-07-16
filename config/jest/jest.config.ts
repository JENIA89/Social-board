/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import path from 'path';

const config: Config = {
    clearMocks: true,
    testEnvironment: 'jsdom',
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'mts', 'cts', 'tsx', 'json', 'node'],
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    testMatch: ['<rootDir>/src/**/*.(test|spec).(ts|tsx|js|jsx)'],
    preset: 'ts-jest',
    rootDir: path.resolve(__dirname, '../../'),
    roots: ['<rootDir>/src'],
    modulePaths: ['<rootDir>/src'],
    setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
    verbose: true,
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
        '\\.svg': path.resolve(__dirname, 'jestMockComponent.tsx'),
    },
    globals: {
        __IS__DEV: true,
    },
};

export default config;

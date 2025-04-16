import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.tsx'],
    testPathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass|png|jpg)$': 'identity-obj-proxy',
        'axios$': 'axios/dist/node/axios.cjs',
    },
    moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx'],
};

export default config;
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    extensionsToTreatAsEsm: ['.ts', '.tsx'],
    setupFilesAfterEnv: ['<rootDir>/src/setupTests.tsx'],
    testPathIgnorePatterns: ['/node_modules/'],
    moduleNameMapper: {
        '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
        '\\.(gif|ttf|eot|svg|png|jpg)$': '<rootDir>/src/__mocks__/fileMock.ts',
        'axios$': 'axios/dist/node/axios.cjs',
    },
    moduleFileExtensions: [ 'js', 'jsx', 'ts', 'tsx'],
};

export default config;
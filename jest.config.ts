module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    moduleNameMapper: {
        // Required for NodeNext. Otherwise, Jest will not be able to resolve imports.
        //
        // More context:
        // https://stackoverflow.com/questions/73735202/typescript-jest-imports-with-js-extension-cause-error-cannot-find-module
        '^(\\.\\.?\\/.+)\\.js$': '$1',
    },
};

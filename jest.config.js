export default {
    testEnvironment: 'jest-environment-jsdom',
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__mocks__/fileMock.js',
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'node']
}
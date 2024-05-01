module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
  transform: {'^.+\\.ts': 'babel-jest'},
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'core/**/*.{ts,tsx}',
    '!app/**/*.d.{ts,tsx}',
    '!core/**/*.d.{ts,tsx}',
    '!core/definitions/**/*.{ts,tsx}',
    '!app/routes/**/*.{ts,tsx}',
    '!core/data/**/*.{ts,tsx}',
    '!core/utils/index.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 60,
      functions: 60,
    },
  },
};

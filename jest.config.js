module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: ['/node_modules/(?!native-base)/'],
  setupFiles: ['./jest.setup.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.{ts,tsx}',
    'core/**/*.{ts,tsx}',
    '!app/**/*.d.{ts,tsx}',
    '!core/**/*.d.{ts,tsx}',
    '!core/definitions/**/*.{ts,tsx}',
    '!app/routes/**/*.{ts,tsx}',
    '!core/__tests__/constanta.ts',
    '!core/utils/index.ts',
  ],
  coverageThreshold: {
    global: {
      lines: 30,
      functions: 30,
    },
  },
};

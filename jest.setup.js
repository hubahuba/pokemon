import 'react-native-gesture-handler/jestSetup';
require('react-native-reanimated').setUpTests();

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

jest.mock('@react-native-firebase/crashlytics', () => {
  return () => ({
    log: jest.fn(),
    recordError: jest.fn(),
    // Any function you want to use or mock
  });
});

jest.mock('@react-native-firebase/analytics', () => () => {
  return {
    logEvent: jest.fn(),
    logLogin: jest.fn(),
    setUserId: jest.fn(),
  };
});

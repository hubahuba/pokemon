import 'react-native-gesture-handler/jestSetup';
require('react-native-reanimated').setUpTests();

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

const mockRecordError = jest.fn();
const mockLog = jest.fn();
jest.mock('@react-native-firebase/crashlytics', () => {
  return () => ({
    log: mockLog,
    recordError: mockRecordError,
  });
});

jest.mock('@react-native-firebase/analytics', () => () => {
  return {
    logEvent: jest.fn(),
    logLogin: jest.fn(),
    setUserId: jest.fn(),
  };
});

export const mockNavigate = jest.fn();
export const mockGoBack = jest.fn();
export const mockReset = jest.fn();
jest.mock('@react-navigation/native', () => {
  return {
    useIsFocused: jest.fn(() => true),
    useNavigation: () => ({
      navigate: mockNavigate,
      goBack: mockGoBack,
      reset: mockReset,
    }),
    useRoute: () => ({
      params: {
        data: {
          id: 1,
          name: 'pokemon',
          baseWeight: 30,
          currentWeight: 30,
          maxWeight: 30,
          image: 'image',
          lastEat: 'soft',
          stats: [],
          nextEvolution: [{
            id: 2,
            name: 'pokemon 2',
            baseWeight: 60,
            currentWeight: 60,
            maxWeight: 90,
            image: 'image',
            lastEat: '',
            order: 2,
            stats: [],
            evolutions: [],
          }],
        },
      },
    }),
  };
});

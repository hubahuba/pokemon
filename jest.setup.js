import 'react-native-gesture-handler/jestSetup';
import {dataPokemon} from '@/__mocks__/constanta';
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

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
      goBack: jest.fn(),
      reset: jest.fn(),
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

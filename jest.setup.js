import 'react-native-gesture-handler/jestSetup';
require('react-native-reanimated').setUpTests();

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter');

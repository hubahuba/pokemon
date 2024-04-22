import LocalStorage from '@/definitions/adapters/local-storage';
import {NativeConfig} from 'react-native-config';
import UseCaseProps from '@/definitions/adapters/use-case';
import UtilsProps from '@/definitions/adapters/utils.ts';
import {FirebaseAnalyticsTypes} from '@react-native-firebase/analytics';

export interface ServicesInterface {
  storage: LocalStorage;
  config: NativeConfig;
  useCase: UseCaseProps;
  util: UtilsProps;
  analytic: FirebaseAnalyticsTypes.Module;
}

import Config from 'react-native-config';
import LocalStorage from '@/adapters/local-storage';
import UseCase from '@/adapters/use-case.ts';
import Util from '@/adapters/util.ts';
import Analytic from '@/adapters/analytic.ts';

import type {ServicesInterface} from '@/definitions/services';

const Services: ServicesInterface = {
  storage: LocalStorage,
  config: Config,
  useCase: UseCase,
  util: Util,
  analytic: Analytic,
};

export default Services;
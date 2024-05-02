import {BerryData} from '@/definitions/data/berries.definition.ts';

export interface SplashViewModel {
  data: BerryData[] | undefined;
  isFetching: boolean;
  isFetched: boolean;
  error: Error | null;
}

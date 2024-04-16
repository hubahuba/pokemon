import UtilsProps from '@/definitions/adapters/utils.ts';
import {
  berryDataMapper,
  capitalize,
  filterMapper,
  findNextWeight,
  pokemonDataMapper,
  window,
} from '@/utils';

const Util: UtilsProps = {
  pokemonDataMapper: pokemonDataMapper,
  berryDataMapper: berryDataMapper,
  findNextWeight: findNextWeight,
  filterMapper: filterMapper,
  capitalize: capitalize,
  window: window,
};

export default Util;

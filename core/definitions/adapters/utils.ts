import {
  PokeApiQueryQuery,
  PokeGetBerriesQuery,
} from '@/definitions/gql/codegen/graphql.ts';
import {
  BerryData,
  PokemonData,
  QuerySearch,
} from '@/definitions/usecases/pokemon';
import {ScaledSize} from 'react-native';

interface UtilsProps {
  pokemonDataMapper: (data: PokeApiQueryQuery) => PokemonData[];
  findNextWeight: (
    current: PokemonData,
    evolutions: PokemonData[],
  ) => PokemonData;
  berryDataMapper: (data: PokeGetBerriesQuery) => BerryData[];
  filterMapper: (
    offset: number,
    limit: number,
    search?: number | string,
  ) => QuerySearch;
  capitalize: (text: string) => string;
  window: ScaledSize;
}

export default UtilsProps;

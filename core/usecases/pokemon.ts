import 'react-native-get-random-values';
import {
  GetBerriesUseCase,
  PokemonUseCaseProps,
  PokemonData,
  QuerySearch,
} from '@/definitions/usecases/pokemon';
import {pokeAPIQueryDocument} from '@/data/pokemons.ts';
import {PokeGetBerriesQueryDocument} from '@/data/berries.ts';
import {pokemonDataMapper, berryDataMapper, filterMapper} from '@/utils';
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
} from '@tanstack/react-query';
import request from 'graphql-request';
import Config from 'react-native-config';
import LocalStorage from '@/adapters/local-storage.ts';

const Pokemon: PokemonUseCaseProps = {
  getPokemon: (
    offset,
    limit,
    search,
  ): UseInfiniteQueryResult<PokemonData[] | undefined> => {
    const filter: QuerySearch = filterMapper(offset, limit, search);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const query = useInfiniteQuery({
      queryKey: ['getPokemons', filter],
      queryFn: async ({pageParam}: any) => {
        const resp = await request(
          Config.API_URL as string,
          pokeAPIQueryDocument,
          pageParam,
        );
        return {
          lastOffset: pageParam.offset,
          pokemons: pokemonDataMapper(resp),
        };
      },
      initialPageParam: filter,
      getNextPageParam: (nextPage, allPages, lastPageParam) => {
        if (lastPageParam && lastPageParam.limit) {
          lastPageParam.offset = nextPage.lastOffset + lastPageParam.limit;
          return lastPageParam;
        }
        return undefined;
      },
    });

    let pokemonData: PokemonData[] = [];
    if (query && query.data) {
      const pokemons = query.data.pages.map(group => group.pokemons);
      pokemonData = pokemons?.reduce((r, e) => (r.push(...e), r), []);
    }

    // @ts-ignore
    return {
      ...query,
      data: pokemonData,
    };
  },

  getBerries: (): GetBerriesUseCase => {
    const localBerries = LocalStorage.getItem('berries');
    if (localBerries) {
      const data = JSON.parse(localBerries);
      return {
        isFetched: true,
        isFetching: false,
        error: null,
        data,
      };
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const {data, isFetching, isFetched, error} = useQuery({
      queryKey: ['getBerries'],
      queryFn: async () => {
        const resp = await request(
          Config.API_URL as string,
          PokeGetBerriesQueryDocument,
        );
        return berryDataMapper(resp);
      },
    });

    if (data) {
      LocalStorage.setItem('berries', JSON.stringify(data));
    }

    return {
      data,
      isFetching,
      isFetched,
      error,
    };
  },

  getMyPokemon: (): PokemonData[] => {
    const localBerries = LocalStorage.getItem('my-pokemons');
    if (localBerries) {
      return JSON.parse(localBerries);
    }
    return [];
  },
};

export default Pokemon;

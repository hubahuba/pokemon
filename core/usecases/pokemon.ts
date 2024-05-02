import 'react-native-get-random-values';
import {
  GetBerriesUseCase,
  PokemonUseCaseProps,
  PokemonData,
  QuerySearch,
  fetchPokemonResponse,
  BerryData,
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
import Mmkv from '@/adapters/mmkv';
import crashlytics from '@react-native-firebase/crashlytics';

const Pokemon: PokemonUseCaseProps = {
  usePokemon: (
    offset,
    limit,
    search,
  ): UseInfiniteQueryResult<PokemonData[] | undefined> => {
    const filter: QuerySearch = filterMapper(offset, limit, search);

    const query = useInfiniteQuery({
      queryKey: ['getPokemons', filter],
      queryFn: async ({
        pageParam,
      }: {
        pageParam: QuerySearch;
      }): Promise<fetchPokemonResponse> => {
        try {
          const resp = await request(
            Config.API_URL,
            pokeAPIQueryDocument,
            pageParam,
          );
          return {
            lastOffset: pageParam.offset,
            pokemons: pokemonDataMapper(resp),
          };
        } catch (err: any) {
          throw new Error(err.response.error);
        }
      },
      initialPageParam: filter,
      getNextPageParam: (nextPage, allPages, lastPageParam) => {
        if (lastPageParam?.limit) {
          lastPageParam.offset = nextPage.lastOffset + lastPageParam.limit;
          return lastPageParam;
        }
        return undefined;
      },
    });

    let pokemonData: PokemonData[] = [];
    if (query?.data) {
      const pokemons = query.data.pages.map(group => group.pokemons);
      pokemonData = pokemons?.reduce((r, e) => (r.push(...e), r), []);
    }

    if (query.error) {
      crashlytics().recordError(query.error, 'useInfiniteQuery-getPokemons');
    }

    // @ts-ignore
    return {
      ...query,
      data: pokemonData,
    };
  },

  useBerries: (): GetBerriesUseCase => {
    let returnError: Error | null = null;

    const {data, isFetching, isFetched, error} = useQuery({
      queryKey: ['getBerries'],
      queryFn: async () => {
        try {
          let localBerries: string | undefined | BerryData[] =
            Mmkv.getItem('berries');
          if (localBerries) {
            localBerries = JSON.parse(localBerries);
            return localBerries as BerryData[];
          }
          const resp = await request(
            Config.API_URL,
            PokeGetBerriesQueryDocument,
          );
          return berryDataMapper(resp);
        } catch (err: any) {
          returnError = new Error(err.response.error);
        }
      },
    });

    if (data) {
      Mmkv.setItem('berries', JSON.stringify(data));
    }

    if (error) {
      returnError = error;
    }

    if (returnError) {
      crashlytics().recordError(returnError, 'useQuery-getBerries');
    }

    return {
      data,
      isFetching,
      isFetched,
      error: returnError,
    };
  },

  getMyPokemon: (): PokemonData[] => {
    const localBerries = Mmkv.getItem('my-pokemons');
    if (localBerries) {
      return JSON.parse(localBerries);
    }
    return [];
  },
};

export default Pokemon;

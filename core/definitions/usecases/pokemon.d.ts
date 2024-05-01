import {PokemonData} from '@/definitions/data/pokemon.definition';
import {BerryData} from '@/definitions/data/berries.definition';
import {UseInfiniteQueryResult} from '@tanstack/react-query';
import {
  Exact,
  InputMaybe,
  Pokemon_V2_Pokemon_Bool_Exp,
} from '@/definitions/gql/codegen/graphql';
import Pokemon from '@/usecases/pokemon.ts';

export type QuerySearch = Exact<{
  limit: number;
  offset: number;
  search?: InputMaybe<Pokemon_V2_Pokemon_Bool_Exp> | undefined;
}>;

export interface PokemonStat {
  value: number;
  name?: string;
}

export interface PokemonData {
  id: number;
  name: string;
  baseWeight?: number | null;
  currentWeight?: number | null;
  maxWeight?: number | null;
  nextEvolution?: PokemonData[];
  image: any;
  order?: number | null;
  stats?: PokemonStat[];
  evolutions?: PokemonData[];
  lastEat?: string;
  owned?: boolean;
  ownedId?: string;
}

export interface BerryData {
  id: number;
  name: string;
  firmness?: 'very-soft' | 'soft' | 'hard' | 'very-hard' | 'super-hard';
  image: any;
}

export interface BerryFirmness {
  'very-soft': number;
  soft: number;
  hard: number;
  'very-hard': number;
  'super-hard': number;
}

export interface GetBerriesUseCase {
  data: BerryData[] | undefined;
  isFetching: boolean;
  isFetched: boolean;
  error: Error | null;
}

export interface PokemonUseCaseProps {
  getPokemon: (
    offset: number,
    limit: number,
    search?: string | number,
  ) => UseInfiniteQueryResult<PokemonData[] | undefined>;

  getBerries: () => GetBerriesUseCase;
  getMyPokemon: () => PokemonData[];
}

export interface getBerryScoreResult {
  firmness: string;
  score: number;
}

export interface fetchPokemonResponse {
  lastOffset: number;
  pokemons: Pokemon[];
}

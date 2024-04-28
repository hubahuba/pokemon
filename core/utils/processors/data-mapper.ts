import {
  PokeApiQueryQuery,
  PokeGetBerriesQuery,
} from '@/definitions/gql/codegen/graphql';
import {
  PokemonData,
  PokemonStat,
  QuerySearch,
  BerryData,
  BerryFirmness,
  getBerryScoreResult,
} from '@/definitions/usecases/pokemon';
import {capitalize} from '@/utils';

export const pokemonDataMapper = (data: PokeApiQueryQuery): PokemonData[] => {
  return data.pokemon_v2_pokemon.map(pokemon => {
    // map stat
    const stats = statMapper(pokemon.pokemon_v2_pokemonstats);

    // map evolution
    const evolutions = evolutionMapper(
      pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_evolutionchain
        ?.pokemon_v2_pokemonspecies || [],
    );

    // map evolution next evo
    const evolutionWithNextEvos = nextEvolutionMapper(evolutions);
    const maxWeight = evolutionWithNextEvos?.length
      ? evolutionWithNextEvos[0].baseWeight
      : pokemon.weight;
    const currentPokemon: PokemonData = {
      id: pokemon.id,
      name: capitalize(pokemon.name),
      image: pokemon.pokemon_v2_pokemonsprites[0].sprites,
      baseWeight: pokemon.weight,
      currentWeight: pokemon.weight,
      maxWeight: maxWeight,
      stats,
      evolutions: evolutionWithNextEvos,
    };
    if (evolutionWithNextEvos) {
      const nextEvo = findNextWeight(currentPokemon, evolutionWithNextEvos);
      currentPokemon.nextEvolution = nextEvo;
      if (nextEvo.length > 0 && nextEvo[0].id !== currentPokemon.id) {
        currentPokemon.maxWeight = nextEvo[0].baseWeight;
      } else {
        currentPokemon.maxWeight = currentPokemon.baseWeight;
      }
    }

    return currentPokemon;
  });
};

export const statMapper = (
  stats: Array<{
    __typename?: 'pokemon_v2_pokemonstat';
    base_stat: number;
    pokemon_v2_stat?: {
      __typename?: 'pokemon_v2_stat';
      pokemon_v2_statnames: Array<{
        __typename?: 'pokemon_v2_statname';
        name: string;
      }>;
    } | null;
  }>,
): PokemonStat[] => {
  return stats.map(stat => {
    return {
      value: stat.base_stat,
      name: stat.pokemon_v2_stat?.pokemon_v2_statnames[0].name,
    };
  });
};

export const evolutionMapper = (
  species: Array<{
    __typename?: 'pokemon_v2_pokemonspecies';
    id: number;
    name: string;
    order?: number | null;
    pokemon_v2_pokemons: Array<{
      __typename?: 'pokemon_v2_pokemon';
      weight?: number | null;
      pokemon_v2_pokemonsprites: Array<{
        __typename?: 'pokemon_v2_pokemonsprites';
        sprites: any;
      }>;
      pokemon_v2_pokemonstats: Array<{
        __typename?: 'pokemon_v2_pokemonstat';
        base_stat: number;
        pokemon_v2_stat?: {
          __typename?: 'pokemon_v2_stat';
          pokemon_v2_statnames: Array<{
            __typename?: 'pokemon_v2_statname';
            name: string;
          }>;
        } | null;
      }>;
    }>;
  }>,
): PokemonData[] => {
  return species.map(pokemon => {
    const currentPokemon = pokemon.pokemon_v2_pokemons[0];
    const evoStats: PokemonStat[] = statMapper(
      currentPokemon.pokemon_v2_pokemonstats,
    );
    return {
      id: pokemon.id,
      name: capitalize(pokemon.name),
      baseWeight: currentPokemon.weight,
      currentWeight: currentPokemon.weight,
      image: currentPokemon.pokemon_v2_pokemonsprites[0].sprites,
      order: pokemon.order,
      stats: evoStats,
    };
  });
};

export const nextEvolutionMapper = (pokemons: PokemonData[]) => {
  return pokemons.map(next => {
    let clonedNext: PokemonData = {...next};
    clonedNext.evolutions = pokemons;
    const nextOfNextEvo = findNextWeight(clonedNext, pokemons);
    clonedNext = setPokemonNextEvo(clonedNext, nextOfNextEvo);
    return clonedNext;
  });
};

export const findNextWeight = (
  current: PokemonData,
  evolutions: PokemonData[],
): PokemonData[] => {
  if (!evolutions.length) {
    return [current];
  }
  const currentEvo: PokemonData | undefined = evolutions.find(
    pokemon => pokemon.id === current.id,
  );
  if (currentEvo) {
    return evolutions.filter(
      pokemon => (pokemon.order as number) > (currentEvo?.order as number),
    );
  }

  return [current];
};

export const berryDataMapper = (data: PokeGetBerriesQuery): BerryData[] => {
  return data.pokemon_v2_berry.map<BerryData>((berry: any) => {
    return {
      id: berry.id,
      name: berry.name,
      firmness: berry.pokemon_v2_berryfirmness?.name,
      image: berry.pokemon_v2_item?.pokemon_v2_itemsprites[0].sprites,
    };
  });
};

export function filterMapper(
  offset: number,
  limit: number,
  search?: number | string,
): QuerySearch {
  const filter: QuerySearch = {
    offset,
    limit,
  };
  if (search && search !== '') {
    filter.offset = 0;
    if (typeof search === 'string') {
      filter.search = {
        name: {
          _ilike: `%${search}%`,
        },
      };
    } else {
      filter.search = {
        id: {
          _eq: search,
        },
      };
    }
  } else {
    filter.search = {};
  }
  return filter;
}

export function getBerryScore(
  selected: BerryData,
  isSame: boolean,
): getBerryScoreResult {
  const berryScores: BerryFirmness = {
    'very-soft': 2,
    soft: 3,
    hard: 5,
    'very-hard': 8,
    'super-hard': 10,
  };
  if (selected.firmness && berryScores[selected.firmness]) {
    return {
      firmness: selected.firmness,
      score: berryScores[selected.firmness] * (isSame ? -2 : 1),
    };
  }
  return {
    firmness: 'others',
    score: 1,
  };
}

function setPokemonNextEvo(pokemon: PokemonData, nextEvo: PokemonData[]) {
  const clonedData: PokemonData = {...pokemon};
  if (nextEvo.length > 0) {
    clonedData.nextEvolution = nextEvo;
    clonedData.maxWeight = nextEvo[0].baseWeight;
  } else {
    clonedData.maxWeight = clonedData.baseWeight;
  }
  return clonedData;
}

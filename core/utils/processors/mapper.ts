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
    const stats: PokemonStat[] = pokemon.pokemon_v2_pokemonstats.map(stat => {
      return {
        value: stat.base_stat,
        name: stat.pokemon_v2_stat?.pokemon_v2_statnames[0].name,
      };
    });
    const evolutions: PokemonData[] | undefined =
      pokemon.pokemon_v2_pokemonspecy?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies.map(
        species => {
          return {
            id: species.id,
            name: capitalize(species.name),
            baseWeight: species.pokemon_v2_pokemons[0].weight,
            image:
              species.pokemon_v2_pokemons[0].pokemon_v2_pokemonsprites[0]
                .sprites,
            order: species.order,
          };
        },
      );
    const currentPokemon: PokemonData = {
      id: pokemon.id,
      name: capitalize(pokemon.name),
      image: pokemon.pokemon_v2_pokemonsprites[0].sprites,
      baseWeight: pokemon.weight,
      maxWeight: pokemon.weight,
      stats,
      evolutions,
    };
    if (evolutions) {
      const nextEvo = findNextWeight(currentPokemon, evolutions);
      if (nextEvo.length > 0 && nextEvo[0].id !== currentPokemon.id) {
        currentPokemon.nextEvolution = nextEvo;
        currentPokemon.maxWeight = nextEvo[0].baseWeight;
      }
    }
    return currentPokemon;
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
    const nextEvo: PokemonData[] | undefined = evolutions.filter(
      pokemon => (pokemon.order as number) > (currentEvo?.order as number),
    );
    if (nextEvo) {
      return nextEvo;
    }
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

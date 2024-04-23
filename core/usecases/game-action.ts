import {GameActionUseCase} from '@/definitions/usecases/game-action';
import {PokemonData} from '@/definitions/usecases/pokemon';
import LocalStorage from '@/adapters/local-storage.ts';
import {v4 as uuid} from 'uuid';
import {getBerryScore} from '@/utils';

const GameAction: GameActionUseCase = {
  iChooseYou: data => {
    const selected: PokemonData = {...data};
    let myPokemons: PokemonData[] | string | undefined =
      LocalStorage.getItem('my-pokemons');
    if (myPokemons) {
      myPokemons = JSON.parse(myPokemons);
    } else {
      myPokemons = [];
    }
    selected.owned = true;
    selected.ownedId = uuid();
    selected.currentWeight = selected.baseWeight;
    (myPokemons as PokemonData[]).push(selected);
    LocalStorage.setItem('my-pokemons', JSON.stringify(myPokemons));
    return selected;
  },

  deletePokemon: pokemonId => {
    const myPokemons: PokemonData[] | string | undefined =
      LocalStorage.getItem('my-pokemons');
    if (myPokemons) {
      const pokemons: PokemonData[] = JSON.parse(myPokemons);
      const filtered = pokemons.filter(
        pokemon => pokemon.ownedId !== pokemonId,
      );
      LocalStorage.setItem('my-pokemons', JSON.stringify(filtered));
    }
  },

  feedPokemon: (pokemonId, berry) => {
    const myPokemons: PokemonData[] | string | undefined =
      LocalStorage.getItem('my-pokemons');
    if (myPokemons) {
      const pokemons: PokemonData[] = JSON.parse(myPokemons);
      const currentPokemon = pokemons.find(
        pokemon => pokemon.ownedId === pokemonId,
      );
      if (currentPokemon) {
        const score = getBerryScore(
          berry,
          currentPokemon.lastEat === berry.firmness,
        );
        currentPokemon.lastEat = score.firmness;
        let weight = (currentPokemon.currentWeight as number) + score.score;
        if (weight < 0) {
          weight = 1;
        } else if (weight >= (currentPokemon.maxWeight as number)) {
          weight = currentPokemon.maxWeight as number;
        }
        currentPokemon.currentWeight = weight;
        const filtered = pokemons.filter(
          pokemon => pokemon.ownedId !== pokemonId,
        );
        filtered.push(currentPokemon);
        LocalStorage.setItem('my-pokemons', JSON.stringify(filtered));
        return currentPokemon;
      }
      return currentPokemon;
    }
    return undefined;
  },

  evolutionPokemon: pokemonId => {
    const myPokemons: PokemonData[] | string | undefined =
      LocalStorage.getItem('my-pokemons');
    if (myPokemons) {
      const pokemons: PokemonData[] = JSON.parse(myPokemons);
      let currentPokemon = pokemons.find(
        pokemon => pokemon.ownedId === pokemonId,
      );
      if (currentPokemon && currentPokemon.nextEvolution) {
        const nextEvo = [...currentPokemon.nextEvolution];

        const current: PokemonData = nextEvo.shift();
        current.owned = currentPokemon.owned;
        current.ownedId = currentPokemon.ownedId;

        const filtered = pokemons.filter(
          pokemon => pokemon.ownedId !== pokemonId,
        );
        filtered.push(current);
        LocalStorage.setItem('my-pokemons', JSON.stringify(filtered));

        return current;
      }
      return currentPokemon;
    }
    return undefined;
  },
};

export default GameAction;

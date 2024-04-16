import {BerryData, PokemonData} from '@/definitions/usecases/pokemon';

export interface GameActionUseCase {
  iChooseYou: (PokemonData) => PokemonData;
  deletePokemon: (pokemonId: string) => void;
  feedPokemon: (pokemonId: string, berry: BerryData) => PokemonData | undefined;
  evolutionPokemon: (pokemonId: string) => PokemonData | undefined;
}

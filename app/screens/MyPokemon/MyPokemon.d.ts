import {PokemonData} from '@/definitions/usecases/pokemon';

export interface MyPokemonViewModelProps {
  data: PokemonData[];
  onPressCard: (data: PokemonData) => void;
}

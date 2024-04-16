import {PokemonData} from '@/definitions/data/pokemon.definition';

export interface HomeViewModelProps {
  data?: PokemonData[];
  isFetched: boolean;
  fetchPokemon: () => any;
  onChangeSearch: (search: string) => void;
  onPressCard: (selected: PokemonData) => void;
}

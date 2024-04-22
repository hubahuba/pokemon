import {PokemonData} from '@/core/definitions/data/pokemon.definition';
import {StackNavigation} from '~/routes/index.d';
import {BerryData, PokemonStat} from '@/definitions/usecases/pokemon';

export interface DetailViewModelProps {
  data: PokemonData;
  navigation: StackNavigation;
  iChooseU: (data: PokemonData) => void;
  deletePokemon: () => void;
  berries?: BerryData[] | string;
  feedPokemon: (ownedId: string, berry: BerryData) => void;
  evolutionPokemon: ({pokemonId}: {pokemonId: string}) => void;
  setShowBerry: (show: boolean) => void;
  showBerry: boolean;
}

export interface StatViewProps {
  name: string;
  weight?: number | null;
  maxWeight?: number | null;
  stats: PokemonStat[];
  owned?: boolean;
  ownedId?: string;
  onDeletePokemon?: () => void;
  onEvolution?: (ownedId: string) => void;
}

export interface PokemonBerriesProps {
  ownedId: string;
  data: BerryData[];
  onCloseBerry?: () => void;
  onSelectBerry?: (ownedId: string, berri: BerryData) => void;
}

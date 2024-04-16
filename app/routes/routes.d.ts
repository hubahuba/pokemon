import {PokemonData} from '@/core/definitions/data/pokemon.definition';
import {NavigationProp} from '@react-navigation/native';

export type RootStackParamList = {
  HomeTab: undefined;
  Splash: undefined;
  Home: undefined;
  Detail: {data: PokemonData};
};

export type StackNavigation = NavigationProp<RootStackParamList>;

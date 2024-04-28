export interface PokemonListProps {
  testID?: string;
  data?: PokemonData[] | PokemonData[][];
  onEndReach?: () => void;
  onPressCard?: (id: PokemonData) => void;
}

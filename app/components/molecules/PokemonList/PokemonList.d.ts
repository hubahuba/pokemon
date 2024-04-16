export interface PokemonListProps {
  data?: PokemonData[] | PokemonData[][];
  onEndReach?: () => void;
  onPressCard?: (id: PokemonData) => void;
}

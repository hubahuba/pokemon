import {TouchableOpacityProps} from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

export interface PokemonCardProps extends TouchableOpacityProps {
  name: string;
  image: string;
}

export interface LoadingProps {
  width?: number;
  height?: number;
}

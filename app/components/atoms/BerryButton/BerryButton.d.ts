import {BerryData} from '@/definitions/usecases/pokemon';
import {TouchableOpacityProps} from 'react-native-gesture-handler';

export interface BerryButtonProps extends TouchableOpacityProps {
  item: BerryData;
  ownedId: string;
  onPress?: (ownedId: string, item: BerryData) => void;
}

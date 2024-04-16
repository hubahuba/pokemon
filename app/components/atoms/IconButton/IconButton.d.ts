import {TouchableOpacityProps} from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

export interface IconButtonProps extends TouchableOpacityProps {
  iconName: string;
  color?: string;
}

import * as React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {IconButtonProps} from '~atoms/IconButton/IconButton';

export default function IconButton(props: Readonly<IconButtonProps>) {
  const {iconName, color, className, ...touchOpacityProps} = props;
  return (
    <TouchableOpacity className={className} {...touchOpacityProps}>
      <Icon color={color} name={iconName} size={24} />
    </TouchableOpacity>
  );
}

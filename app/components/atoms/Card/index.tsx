import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {TouchableOpacityProps} from 'react-native/Libraries/Components/Touchable/TouchableOpacity';

const Card = ({children, ...props}: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      {...props}
      className="border rounded border-gray-300 ml-4 mt-4">
      <View className="bg-gray-200 p-2">{children}</View>
    </TouchableOpacity>
  );
};

export default Card;

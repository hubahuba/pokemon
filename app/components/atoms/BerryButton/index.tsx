import {View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native-gesture-handler';
import * as React from 'react';
import {BerryButtonProps} from '~atoms/BerryButton/BerryButton';
import {memo} from 'react';

const BerryButton = memo(function BerryButton({
  item,
  ownedId,
  onPress,
  ...others
}: BerryButtonProps) {
  return (
    <TouchableOpacity
      {...others}
      key={item.id}
      onPress={() => {
        onPress?.(ownedId, item);
      }}
      style={{height: '100%', width: '100%'}}>
      <View className="flex flex-1 p-0.5 rounded-full bg-gray-100 justify-center items-center overflow-hidden">
        <FastImage
          defaultSource={require('~/assets/images/berry.png')}
          className="w-full h-full"
          source={{uri: item.image}}
        />
      </View>
    </TouchableOpacity>
  );
});

export default BerryButton;

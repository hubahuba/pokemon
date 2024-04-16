import * as React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import ViewModel from '~/screens/Splash/view-model.ts';

function Splash() {
  ViewModel();
  return (
    <View className="flex flex-1 p-6">
      <View className="grow justify-center items-center">
        <FastImage
          style={{width: 140, height: 140}}
          source={require('~/assets/images/pokeball.png')}
        />
      </View>
      <View className="flex-none justify-center items-center">
        <Text>Pokemon</Text>
      </View>
    </View>
  );
}

export default Splash;

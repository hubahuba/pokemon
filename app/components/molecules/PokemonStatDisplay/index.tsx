import * as React from 'react';
import {View, Text} from 'react-native';
import * as Progress from 'react-native-progress';
import {PokemonStatProps} from './PokemonStatDisplay';

export default function PokemonStatDisplay({name, value}: PokemonStatProps) {
  return (
    <View className="flex flex-row space-x-2">
      <View className="basis-[130px] items-end">
        <Text className="text-[16px] font-[Raleway-Medium]">{name}</Text>
      </View>
      <View className="grow justify-center">
        <Progress.Bar width={190} borderRadius={2} progress={value} />
      </View>
    </View>
  );
}

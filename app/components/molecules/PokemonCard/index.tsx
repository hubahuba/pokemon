import * as React from 'react';
import {memo} from 'react';
import {Text} from 'react-native';
import FastImage from 'react-native-fast-image';
import {PokemonCardProps} from './PokemonCard';
import Card from '~atoms/Card';

const PokemonCard = memo(function PokemonCard({
  name,
  image,
  ...touchProps
}: PokemonCardProps) {
  return (
    <Card {...touchProps} className="ml-4 mt-4 bg-gray-100">
      <FastImage
        defaultSource={require('~/assets/images/pokeball.png')}
        style={{width: 140, height: 140}}
        source={{uri: image}}
      />
      <Text className="text-slate-800 font-[Raleway-Regular] text-md">
        {name}
      </Text>
    </Card>
  );
});

export default PokemonCard;

import * as React from 'react';
import {ImageBackground, Text} from 'react-native';
import {EmptyPokemonProps} from '~molecules/EmptyPokemon/EmptyPokemon';

export default function EmptyPokemon({message}: EmptyPokemonProps) {
  return (
    <ImageBackground
      className="min-h-screen items-center px-4"
      resizeMode="contain"
      source={require('~/assets/images/sad.jpg')}>
      <Text className="font-[Raleway-SemiBold] text-[28px] mt-[170] text-slate-600 text-center">
        {message}
      </Text>
    </ImageBackground>
  );
}

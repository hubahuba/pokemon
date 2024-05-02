import * as React from 'react';
import PokemonList from '~molecules/PokemonList';
import ViewModel from '~/screens/MyPokemon/view-model.ts';
import EmptyPokemon from '~atoms//EmptyPokemon';
import {PokemonData} from '@/definitions/usecases/pokemon';

export default function MyPokemon() {
  const {data, onPressCard} = ViewModel();
  return data?.length ? (
    <PokemonList
      data={data}
      onPressCard={(selected: PokemonData) => onPressCard(selected)}
    />
  ) : (
    <EmptyPokemon message="Please choose your Pokemon..." />
  );
}

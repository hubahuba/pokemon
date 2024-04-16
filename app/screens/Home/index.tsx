import * as React from 'react';
import PokemonList from '~molecules/PokemonList';
import ViewModel from '~/screens/Home/view-model.ts';
import EmptyPokemon from '~molecules/EmptyPokemon';

function Home() {
  const {data, fetchPokemon, onPressCard} = ViewModel();

  return data !== undefined ? (
    <PokemonList
      data={data}
      onEndReach={() => fetchPokemon()}
      onPressCard={onPressCard}
    />
  ) : (
    <EmptyPokemon message="No Pokemon around..." />
  );
}

export default Home;

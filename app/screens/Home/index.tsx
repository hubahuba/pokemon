import * as React from 'react';
import PokemonList from '~molecules/PokemonList';
import ViewModel from '~/screens/Home/view-model.ts';
import EmptyPokemon from '~molecules/EmptyPokemon';
import {View} from 'react-native';

function Home() {
  const {data, fetchPokemon, onPressCard} = ViewModel();

  return (
    <View className="bg-gray-100">
      {data !== undefined ? (
        <PokemonList
          data={data}
          onEndReach={() => fetchPokemon()}
          onPressCard={onPressCard}
        />
      ) : (
        <EmptyPokemon message="No Pokemon around..." />
      )}
    </View>
  );
}

export default Home;

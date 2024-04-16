import * as React from 'react';
import {View, FlatList} from 'react-native';
import PokemonCard from '~/components/molecules/PokemonCard';
import {PokemonListProps} from './PokemonList';
import {PokemonData} from '@/definitions/usecases/pokemon';

function Index({data, onEndReach, onPressCard}: Readonly<PokemonListProps>) {
  return (
    <View className="pt-4 pb-4">
      <View className="flex flex-row flex-wrap items-start">
        <FlatList
          data={data as PokemonData[]}
          numColumns={2}
          renderItem={({item}) => (
            <PokemonCard
              onPress={() => onPressCard?.(item)}
              name={item.name}
              image={item.image}
            />
          )}
          keyExtractor={item => item.ownedId || String(item.id)}
          columnWrapperStyle={{
            justifyContent: 'center',
            alignItems: 'flex-start',
            marginLeft: -4,
            marginTop: -4,
          }}
          onEndReachedThreshold={0.3}
          onEndReached={() => onEndReach?.()}
          maxToRenderPerBatch={20}
          removeClippedSubviews={true}
        />
      </View>
    </View>
  );
}

export default Index;

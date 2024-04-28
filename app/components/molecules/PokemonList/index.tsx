import * as React from 'react';
import {View, FlatList} from 'react-native';
import PokemonCard from '~/components/molecules/PokemonCard';
import {PokemonListProps} from './PokemonList';
import {PokemonData} from '@/definitions/usecases/pokemon';

function PokemonList({
  data,
  onEndReach,
  onPressCard,
}: Readonly<PokemonListProps>) {
  return (
    <View>
      <View className="flex flex-row flex-wrap justify-center items-start">
        <FlatList
          data={data as PokemonData[]}
          numColumns={2}
          renderItem={({item}) => (
            <PokemonCard
              onPress={() => onPressCard?.(item)}
              name={item.name}
              image={item.image}
              testID={`PokemonCard-${item.name}`}
            />
          )}
          keyExtractor={item => item.ownedId || String(item.id)}
          columnWrapperStyle={{
            justifyContent: 'center',
          }}
          onEndReachedThreshold={0.3}
          onEndReached={() => onEndReach?.()}
          maxToRenderPerBatch={20}
          removeClippedSubviews={true}
          testID="PokemonListContainer"
        />
      </View>
    </View>
  );
}

export default PokemonList;

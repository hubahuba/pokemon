import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import PokemonStatText from '~/components/molecules/PokemonStatDisplay/index.tsx';
import {StatViewProps} from '~/screens/Detail/Detail';
import IconButton from '~atoms/IconButton';

export default function StatView({
  name,
  weight,
  maxWeight,
  stats,
  owned,
  ownedId,
  onDeletePokemon,
  onEvolution,
}: StatViewProps) {
  return (
    <View className="bg-gray-100 p-4 rounded w-full">
      <View className="flex border-b-gray-300 border-b pb-1 mb-2 items-center">
        {owned && (
          <IconButton
            color="#FF0000"
            className="absolute top-2 right-0"
            iconName="delete"
            onPress={() => onDeletePokemon?.()}
          />
        )}
        <Text className="font-[Raleway-Bold] text-[28px]">{name}</Text>
      </View>
      <View className="w-full">
        {stats.map(stat => {
          return (
            <View key={stat.name} className="mb-2">
              <PokemonStatText
                name={stat.name as string}
                value={stat.value / 255}
              />
            </View>
          );
        })}
        {(weight as number) >= (maxWeight as number) && ownedId ? (
          <View>
            <TouchableOpacity
              onPress={() => {
                if (ownedId) {
                  onEvolution?.(ownedId);
                }
              }}
              className="bg-amber-500 px-4 py-2 rounded justify-center items-center">
              <Text className="font-[Raleway-Bold] text-[18px] text-white">
                Evolution
              </Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <PokemonStatText
              name="Weight"
              value={(weight as number) / (maxWeight as number)}
            />
          </View>
        )}
      </View>
    </View>
  );
}

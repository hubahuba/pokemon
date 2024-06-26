import * as React from 'react';
import {ImageBackground, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Animated, {FadeInUp, FadeOutDown} from 'react-native-reanimated';

import StatView from '~/screens/Detail/StatView';
import IconButton from '~/components/atoms/IconButton';
import ViewModel from '~/screens/Detail/view-model';
import ImageButton from '~atoms/ImageButton';
import PokemonBerries from '~/screens/Detail/PokemonBerries';
import {BerryData, PokemonData} from '@/definitions/usecases/pokemon';

function Detail() {
  const {
    data,
    closePokemon,
    iChooseU,
    deletePokemon,
    berries,
    showBerry,
    setShowBerry,
    feedPokemon,
    evolutionPokemon,
  } = ViewModel();
  if (data) {
    const {
      name,
      image,
      baseWeight,
      currentWeight,
      stats,
      owned,
      maxWeight,
      ownedId,
      nextEvolution,
    } = data as PokemonData;
    return (
      <ImageBackground
        className="items-center min-h-screen"
        style={{width: '100%', height: '100%'}}
        source={require('~/assets/images/background.jpg')}
        blurRadius={10}>
        <View className="flex-1 flex flex-col basis-11/12">
          <IconButton
            testID="DetailBackButton"
            className="rounded-full bg-gray-400 p-1 absolute right-0 top-3 border border-gray-500"
            iconName="close"
            onPress={closePokemon}
          />

          <View className="grow">
            <FastImage
              defaultSource={require('~/assets/images/pokeball.png')}
              source={{uri: image}}
              style={{width: 340, height: 340}}
            />
            {stats?.length && (
              <StatView
                name={name}
                weight={owned === true ? currentWeight : baseWeight}
                maxWeight={maxWeight ?? baseWeight}
                stats={stats}
                owned={owned}
                ownedId={ownedId}
                onDeletePokemon={deletePokemon}
                nextEvolution={nextEvolution}
                onEvolution={currentOwnedId =>
                  evolutionPokemon({pokemonId: currentOwnedId})
                }
              />
            )}
          </View>

          {showBerry && berries !== undefined && (
            <PokemonBerries
              onCloseBerry={() => setShowBerry(false)}
              data={berries as BerryData[]}
              ownedId={ownedId}
              onSelectBerry={feedPokemon}
            />
          )}

          {owned !== true && (
            <View className="flex-none items-center">
              <ImageButton
                source={require('~/assets/images/choose.png')}
                onPress={() => iChooseU(data)}
              />
            </View>
          )}

          {!showBerry && owned && nextEvolution && nextEvolution.length > 0 && (
            <Animated.View
              entering={FadeInUp}
              exiting={FadeOutDown}
              className="flex-none items-center">
              <ImageButton
                source={require('~/assets/images/berry.png')}
                onPress={() => setShowBerry(true)}
              />
            </Animated.View>
          )}
        </View>
      </ImageBackground>
    );
  }
}

export default Detail;

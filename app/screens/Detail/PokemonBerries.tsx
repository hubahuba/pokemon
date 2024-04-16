import * as React from 'react';
import {View} from 'react-native';
import Animated, {
  FadeInUp,
  FadeOutDown,
  interpolate,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {
  TouchableOpacity,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

import IconButton from '~atoms/IconButton';
import {PokemonBerriesProps} from '~/screens/Detail/Detail';
import services from '@/services.ts';
import {memo} from 'react';

const PAGE_WIDTH = services.util.window.width;
const CAROUSEL_WIDTH = PAGE_WIDTH - PAGE_WIDTH * (13 / 100);

const PokemonBerries = memo(function PokemonBerries({
  data,
  onCloseBerry,
  onSelectBerry,
  ownedId,
}: PokemonBerriesProps) {
  const itemSize = 60;
  const centerOffset = CAROUSEL_WIDTH / 2 - itemSize / 2;

  const animationStyle = React.useCallback(
    (value: number) => {
      'worklet';

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-30, -15, 0, 0, 0, 15, 30],
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.3, 0, 0.3, 1],
        [60, 45, 40, 45, 60],
      );

      const scale = interpolate(
        value,
        [-1, -0.5, 0, 0.5, 1],
        [0.8, 0.85, 1.1, 0.85, 0.8],
      );

      return {
        transform: [
          {
            translateX,
          },
          {
            translateY,
          },
          {scale},
        ],
      };
    },
    [centerOffset],
  );

  return (
    <Animated.View entering={FadeInUp} exiting={FadeOutDown}>
      <GestureHandlerRootView>
        <Carousel
          width={itemSize}
          height={itemSize}
          style={{
            width: CAROUSEL_WIDTH,
            height: PAGE_WIDTH / 2 + 20,
          }}
          loop
          autoPlay={false}
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                onSelectBerry?.(ownedId, item);
              }}
              style={{height: '100%', width: '100%'}}>
              <View className="flex flex-1 p-0.5 rounded-full bg-gray-100 justify-center items-center overflow-hidden">
                <FastImage
                  className="w-full h-full"
                  source={{uri: item.image}}
                />
              </View>
            </TouchableOpacity>
          )}
          customAnimation={animationStyle}
        />
        <IconButton
          className="absolute rounded-full bg-gray-400 p-1 border border-gray-500"
          style={{
            top: CAROUSEL_WIDTH / 2 - 60,
            left: CAROUSEL_WIDTH / 2 - 15,
          }}
          iconName="close"
          onPress={onCloseBerry}
        />
      </GestureHandlerRootView>
    </Animated.View>
  );
});

export default PokemonBerries;

import * as React from 'react';
import {View} from 'react-native';
import Animated, {
  FadeInUp,
  FadeOutDown,
  interpolate,
} from 'react-native-reanimated';
import Carousel from 'react-native-reanimated-carousel';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import IconButton from '~atoms/IconButton';
import {PokemonBerriesProps} from '~/screens/Detail/Detail';
import {memo, useState} from 'react';
import BerryButton from '~atoms/BerryButton';

const PokemonBerries = memo(function PokemonBerries({
  data,
  onCloseBerry,
  onSelectBerry,
  ownedId,
}: PokemonBerriesProps) {
  const [viewWidth, setViewWidth] = useState(0);
  const itemSize = 80;
  const iconSize = 34;
  const centerOffset = viewWidth / 2 - itemSize / 2;

  const animationStyle = React.useCallback(
    (value: number) => {
      'worklet';

      const itemGap = interpolate(
        value,
        [-3, -2, -1, 0, 1, 2, 3],
        [-30, -10, 0, 0, 0, 10, 30],
      );

      const translateX =
        interpolate(value, [-1, 0, 1], [-itemSize, 0, itemSize]) +
        centerOffset -
        itemGap;

      const translateY = interpolate(
        value,
        [-1, -0.3, 0, 0.4, 1],
        [50, 35, 30, 35, 50],
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

  if (!ownedId) {
    return <View />;
  }

  return (
    <Animated.View
      testID="PokemonBerriesWrapper"
      onLayout={event => setViewWidth(event.nativeEvent.layout.width)}
      entering={FadeInUp}
      exiting={FadeOutDown}>
      <GestureHandlerRootView>
        <Carousel
          width={itemSize}
          height={itemSize}
          style={{
            width: '100%',
            height: viewWidth / 2,
          }}
          loop
          autoPlay={false}
          data={data}
          renderItem={({item}) => (
            <BerryButton
              item={item}
              onPress={onSelectBerry}
              ownedId={ownedId}
              testID="SelectBerry"
            />
          )}
          customAnimation={animationStyle}
        />
        <IconButton
          testID="CloseBerriesButton"
          className="absolute rounded-full bg-gray-400 p-1 border border-gray-500"
          style={{
            top: viewWidth / 2 - iconSize,
            left: viewWidth / 2 - iconSize / 2,
          }}
          iconName="close"
          onPress={onCloseBerry}
        />
      </GestureHandlerRootView>
    </Animated.View>
  );
});

export default PokemonBerries;

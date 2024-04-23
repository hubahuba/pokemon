import * as React from 'react';
import {View} from 'react-native';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {useIsFetching} from '@tanstack/react-query';

import RootStack from '~/routes/RootStack';
import services from '@/services.ts';
import {RootStackParamList} from '~/routes/routes';

function Routes() {
  const isFetching = useIsFetching();
  const navigationRef = createNavigationContainerRef<RootStackParamList>();
  const routeNameRef = React.useRef<any>();
  // const navigationRef = React.useRef<any>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName =
          navigationRef?.current?.getCurrentRoute()?.name;

        if (currentRouteName && previousRouteName !== currentRouteName) {
          await services.analytic.logScreenView({
            screen_name: currentRouteName,
            screen_class: currentRouteName,
          });
          routeNameRef.current = currentRouteName;
        }
      }}>
      <View className="fixed bg-gray-100 w-full top-0 left-0">
        {isFetching > 0 && (
          <Progress.Bar
            width={null}
            indeterminate={true}
            height={3}
            borderWidth={0}
          />
        )}
      </View>
      <RootStack />
    </NavigationContainer>
  );
}

export default Routes;

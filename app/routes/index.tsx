import * as React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import {useIsFetching} from '@tanstack/react-query';

import RootStack from '~/routes/RootStack';

function Routes() {
  const isFetching = useIsFetching();
  return (
    <NavigationContainer>
      <View className="fixed bg-gray-100 w-full top-0 left-0">
        {isFetching > 0 && (
          <Progress.Bar
            width={null}
            indeterminate={true}
            height={1}
            borderWidth={0}
          />
        )}
      </View>
      <RootStack />
    </NavigationContainer>
  );
}

export default Routes;

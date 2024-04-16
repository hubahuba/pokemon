import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '~/screens/Splash';
import HomeTab from '~/routes/HomeTab';
import Detail from '~/screens/Detail';

import {RootStackParamList} from '~/routes/routes.d';

export const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

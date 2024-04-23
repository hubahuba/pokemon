import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Home from '~/screens/Home';
import MyPokemon from '~/screens/MyPokemon';

const Tab = createMaterialTopTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator className="dark:bg-slate-800">
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="My Pokemon" component={MyPokemon} />
    </Tab.Navigator>
  );
}

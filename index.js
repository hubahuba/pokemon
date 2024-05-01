/**
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {Root as PopupRootProvider} from 'react-native-popup-confirm-toast';

function Main() {
  return (
    <PopupRootProvider>
      <App />
    </PopupRootProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

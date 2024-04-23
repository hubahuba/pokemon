import React from 'react';
import renderer from 'react-test-renderer';
import BerryButton from '../index';
import {BerryData} from '@/definitions/usecases/pokemon';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

it('renders BerryButton correctly', () => {
  const dummyBerry: BerryData = {
    id: 1,
    name: 'dummy',
    firmness: 'soft',
    image: 'image',
  };
  const tree = renderer
    .create(
      <GestureHandlerRootView>
        <BerryButton item={dummyBerry} ownedId="randomString" />
      </GestureHandlerRootView>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

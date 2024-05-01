import React from 'react';
import BerryButton from '../index';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import {dataBerry} from '@/__mocks__/constanta.ts';

const dummyBerry = dataBerry[0];

it('renders BerryButton correctly', () => {
  const tree = render(
    <GestureHandlerRootView>
      <BerryButton item={dummyBerry} ownedId="randomString" />
    </GestureHandlerRootView>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('BerryButton action test', async () => {
  const mockSelect = jest.fn();
  const tree = render(
    <GestureHandlerRootView>
      <BerryButton
        item={dummyBerry}
        onPress={mockSelect}
        ownedId="randomString"
        testID="berryButton"
      />
    </GestureHandlerRootView>,
  );
  const {getByTestId} = tree;
  const button = getByTestId('berryButton');
  fireEvent.press(button);
  await waitFor(() => expect(mockSelect.mock.calls.length).toBe(1));
});

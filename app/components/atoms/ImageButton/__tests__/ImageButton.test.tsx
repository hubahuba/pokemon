import React from 'react';
import ImageButton from '../index';
import {render} from '@testing-library/react-native';

it('renders BerryButton correctly', () => {
  const tree = render(
    <ImageButton source={require('~/assets/images/pikachu-sad.png')} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

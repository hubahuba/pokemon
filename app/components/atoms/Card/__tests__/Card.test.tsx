import React from 'react';
import Card from '../index';
import {render} from '@testing-library/react-native';

it('renders Card correctly', () => {
  const tree = render(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

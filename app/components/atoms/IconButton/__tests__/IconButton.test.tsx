import React from 'react';
import IconButton from '../index';
import {render} from '@testing-library/react-native';

it('renders Card correctly', () => {
  const tree = render(<IconButton iconName="close" />).toJSON();
  expect(tree).toMatchSnapshot();
});

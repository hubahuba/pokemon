import React from 'react';
import EmptyPokemon from '../index';
import {render} from '@testing-library/react-native';

it('renders Card correctly', () => {
  const tree = render(<EmptyPokemon message="testing" />).toJSON();
  expect(tree).toMatchSnapshot();
});

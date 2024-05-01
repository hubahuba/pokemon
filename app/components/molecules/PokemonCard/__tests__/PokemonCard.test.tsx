import React from 'react';
import PokemonCard from '../index';
import {render} from '@testing-library/react-native';

it('renders Card correctly', () => {
  const tree = render(<PokemonCard name="test" image="test" />).toJSON();
  expect(tree).toMatchSnapshot();
});

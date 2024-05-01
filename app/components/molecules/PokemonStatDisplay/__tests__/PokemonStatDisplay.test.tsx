import React from 'react';
import PokemonStatDisplay from '../index';
import {render} from '@testing-library/react-native';

it('renders Card correctly', () => {
  const tree = render(
    <PokemonStatDisplay name="test stat" value={2} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

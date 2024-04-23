import React from 'react';
import renderer from 'react-test-renderer';
import PokemonCard from '../index';

it('renders Card correctly', () => {
  const tree = renderer
    .create(<PokemonCard name="test" image="test" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import PokemonStatDisplay from '../index';

it('renders Card correctly', () => {
  const tree = renderer
    .create(<PokemonStatDisplay name="test stat" value={2} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

import React from 'react';
import renderer from 'react-test-renderer';
import EmptyPokemon from '../index';

it('renders Card correctly', () => {
  const tree = renderer.create(<EmptyPokemon message="testing" />).toJSON();
  expect(tree).toMatchSnapshot();
});

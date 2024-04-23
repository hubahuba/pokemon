import React from 'react';
import renderer from 'react-test-renderer';
import Card from '../index';

it('renders Card correctly', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

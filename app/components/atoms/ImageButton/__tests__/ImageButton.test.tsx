import React from 'react';
import renderer from 'react-test-renderer';
import ImageButton from '../index';

it('renders BerryButton correctly', () => {
  const tree = renderer
    .create(<ImageButton source={require('~/assets/images/pikachu-sad.png')} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

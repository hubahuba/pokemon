import React from 'react';
import renderer from 'react-test-renderer';
import IconButton from '../index';

it('renders Card correctly', () => {
  const tree = renderer.create(<IconButton iconName="close" />).toJSON();
  expect(tree).toMatchSnapshot();
});

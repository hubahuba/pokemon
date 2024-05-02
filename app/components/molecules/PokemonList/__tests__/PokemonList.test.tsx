import React from 'react';
import PokemonList from '../index';
import {dataPokemon} from '@/__mocks__/constanta.ts';
import {
  render,
  screen,
  act,
  fireEvent,
  waitFor,
} from '@testing-library/react-native';

const mockPressCard = jest.fn();
const mockEncScroll = jest.fn();

describe('PokemonBerries', () => {
  beforeEach(() => {
    render(
      <PokemonList
        data={dataPokemon}
        onPressCard={mockPressCard}
        onEndReach={mockEncScroll}
      />,
    );
  });

  it('renders PokemonList correctly', () => {
    const tree = screen.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('PokemonList pressed card', async () => {
    const button = screen.getByTestId('PokemonCard-Bulbasaur');
    fireEvent.press(button);
    await waitFor(() => expect(mockPressCard.mock.calls.length).toBe(1));
  });

  test('PokemonList scrolled card', async () => {
    const list = screen.getByTestId('PokemonListContainer');
    await act(async () => {
      fireEvent(list, 'onEndReached');
    });
    await waitFor(() => expect(mockEncScroll.mock.calls.length).toBe(1));
  });
});

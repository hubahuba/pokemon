import React from 'react';
import PokemonBerries from '~/screens/Detail/PokemonBerries';
import {dataBerry} from '@/__mocks__/constanta.ts';
import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react-native';

const mockClose = jest.fn();
const mockSelectBerry = jest.fn();

describe('PokemonBerries', () => {
  beforeEach(async () => {
    render(
      <PokemonBerries
        onCloseBerry={mockClose}
        onSelectBerry={mockSelectBerry}
        data={dataBerry}
        ownedId="randomString"
      />,
    );
    await waitForElementToBeRemoved(() => {
      return screen.getByTestId('__CAROUSEL_ITEM_1_NOT_READY__');
    });
  });

  it('renders PokemonBerries correctly', async () => {
    const tree = screen.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders PokemonBerries with no ownedId correctly', () => {
    const tree = render(<PokemonBerries data={dataBerry} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('PokemonBerries close action test', async () => {
    const button = screen.getByTestId('CloseBerriesButton');
    fireEvent.press(button);
    await waitFor(() => expect(mockClose.mock.calls.length).toBe(1));
  });

  test('PokemonBerries select action test', async () => {
    const button = screen.getAllByTestId('SelectBerry');
    fireEvent.press(button[0]);
    await waitFor(() => {
      expect(mockSelectBerry.mock.calls.length).toBe(1);
    });
  });
});

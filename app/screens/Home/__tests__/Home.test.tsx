import React from 'react';
import ViewModel from '~/screens/Home/view-model';
import {
  waitFor,
  renderHook,
  render,
  screen,
  act,
  fireEvent,
} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import nock from 'nock';
import {dataPokemon, dummyData} from '@/__mocks__/constanta.ts';
import {mockNavigate} from '../../../../jest.setup';
import Home from '~/screens/Home';
import {PokemonData} from '@/definitions/usecases/pokemon';

describe('Home Screen', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Infinity,
      },
    },
  });

  const wrapper = ({children}: {children: any}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  nock('https://beta.pokeapi.co')
    .post('/graphql/v1beta')
    .reply(200, () => ({
      data: dummyData,
    }));

  test('viewModel home check if data is set', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    await waitFor(() => {
      expect((result.current.data as PokemonData[])[0].name).toBe('Bulbasaur');
    });
  });

  test('viewModel home check if navigated', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    result.current.onPressCard(dataPokemon[0]);
    await waitFor(() => {
      expect(mockNavigate.mock.calls.length).toBe(1);
    });
  });

  test('Home screen snapshot', async () => {
    render(<Home />, {wrapper});
    await waitFor(() => {
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });

  test('Home scrolled card', async () => {
    render(<Home />, {wrapper});
    const list = screen.getByTestId('PokemonListContainer');
    await act(async () => {
      fireEvent(list, 'onEndReached');
    });
  });
});

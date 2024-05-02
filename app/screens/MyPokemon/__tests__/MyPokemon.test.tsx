import {
  render,
  renderHook,
  screen,
  waitFor,
} from '@testing-library/react-native';
import ViewModel from '~/screens/MyPokemon/view-model.ts';
import MyPokemon from '~/screens/MyPokemon';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import Mmkv from '@/adapters/mmkv.ts';
import {dataPokemon} from '@/__mocks__/constanta.ts';
import {mockNavigate} from '../../../../jest.setup';

describe('MyPokemon Screen', () => {
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

  test('MyPokemon view-model data test', async () => {
    Mmkv.setItem('my-pokemons', JSON.stringify(dataPokemon));
    const {result} = renderHook(() => ViewModel(), {wrapper});
    await waitFor(() => {
      expect(result.current.data[0].id).toBe(1);
    });
  });

  test('MyPokemon view-model onPress test', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    const {onPressCard} = result.current;
    onPressCard(dataPokemon[0]);
    await waitFor(() => {
      expect(mockNavigate.mock.calls.length).toBe(1);
    });
  });

  test('MyPokemon screen snapshot', async () => {
    render(<MyPokemon />, {wrapper});
    await waitFor(() => {
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });
});

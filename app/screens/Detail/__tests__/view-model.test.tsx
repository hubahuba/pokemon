import React from 'react';
import {Root as PopupRootProvider} from 'react-native-popup-confirm-toast';
import ViewModel from '~/screens/Detail/view-model';
import {waitFor, renderHook, screen} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {PokemonData} from '@/definitions/usecases/pokemon';
import Mmkv from '@/adapters/mmkv';
import {dataBerry} from '@/__mocks__/constanta';
import {mockGoBack} from '../../../../jest.setup';

describe('Detail view-model', () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: Infinity,
      },
    },
  });
  const wrapper = ({children}: {children: any}) => (
    <QueryClientProvider client={queryClient}>
      {/*
      // @ts-ignore */}
      <PopupRootProvider>{children}</PopupRootProvider>
    </QueryClientProvider>
  );

  test('viewModel check if param data is set', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    await waitFor(() => {
      expect(result.current.data.name).toBe('pokemon');
    });
  });

  test('viewModel check iChooseU', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    result.current.iChooseU(result.current.data);
    await waitFor(() => {
      expect(result.current.data.name).toBe('pokemon');
    });
  });

  test('viewModel check deletePokemon', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    result.current.deletePokemon();
    await waitFor(() => {
      expect(screen.getByText('Hapus Pokemon!')).toBeDefined();
    });
  });

  test('viewModel check feedPokemon', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    let check: string | undefined | PokemonData[] = Mmkv.getItem('my-pokemons');
    check = JSON.parse(check as string);
    const selectedPokemon = (check as PokemonData[])[0];
    result.current.feedPokemon(selectedPokemon.ownedId as string, dataBerry[0]);
    await waitFor(() => {
      let checkNext: string | undefined | PokemonData[] =
        Mmkv.getItem('my-pokemons');
      checkNext = JSON.parse(checkNext as string);
      const thePokemon = (checkNext as PokemonData[])[0];
      expect(selectedPokemon.currentWeight).not.toEqual(
        thePokemon.currentWeight as number,
      );
    });
  });

  test('viewModel check evolutionPokemon', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    let check: string | undefined | PokemonData[] = Mmkv.getItem('my-pokemons');
    check = JSON.parse(check as string);
    const selectedPokemon = (check as PokemonData[])[0];
    result.current.evolutionPokemon({
      pokemonId: selectedPokemon.ownedId as string,
    });
    await waitFor(() => {
      let checkNext: string | undefined | PokemonData[] =
        Mmkv.getItem('my-pokemons');
      checkNext = JSON.parse(checkNext as string);
      const thePokemon = (checkNext as PokemonData[])[0];
      expect(thePokemon.name).toEqual('pokemon 2');
    });
  });

  test('viewModel check closePokemon', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    result.current.closePokemon();
    await waitFor(() => {
      expect(mockGoBack.mock.calls.length).toBe(1);
    });
  });
});

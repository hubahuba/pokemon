import React from 'react';
import nock from 'nock';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {renderHook, waitFor} from '@testing-library/react-native';
import Pokemon from '@/usecases/pokemon.ts';
import {dataPokemon, dummyBerries, dummyData} from '@/__mocks__/constanta.ts';
import Mmkv from '@/adapters/mmkv.ts';

describe('useCase pokemon', () => {
  const queryClient = new QueryClient();
  const wrapper = ({children}: {children: any}) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  const nockScope = nock('https://beta.pokeapi.co');

  test('getPokemon test', async () => {
    nockScope.post('/graphql/v1beta').reply(200, () => ({
      data: dummyData,
    }));

    const {result} = renderHook(() => Pokemon.getPokemon(0, 20), {wrapper});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  test('getPokemon test limit 0', async () => {
    nockScope.post('/graphql/v1beta').reply(200, () => ({
      data: dummyData,
    }));

    const {result} = renderHook(() => Pokemon.getPokemon(0, 0), {wrapper});
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  test('getPokemon test error', async () => {
    nock('https://beta.pokeapi.co')
      .post('/graphql/v1beta')
      .reply(500, {error: 'error test'});

    const {result} = renderHook(() => Pokemon.getPokemon(0, 11), {wrapper});
    await waitFor(() => {
      expect(result.current.failureCount).toBe(1);
    });
  });

  test('getBerries test', async () => {
    nock('https://beta.pokeapi.co')
      .post('/graphql/v1beta')
      .reply(200, () => ({
        data: dummyBerries,
      }));

    const {result} = renderHook(() => Pokemon.getBerries(), {wrapper});
    await waitFor(() => expect(result.current.isFetched).toBe(true));
  });

  test('getBerries test local storage', async () => {
    Mmkv.setItem('berries', JSON.stringify(dummyBerries));

    const {result} = renderHook(() => Pokemon.getBerries(), {wrapper});
    await waitFor(() => expect(result.current.isFetched).toBe(true));
  });

  test('getMyPokemon test local storage', async () => {
    Mmkv.setItem('my-pokemons', JSON.stringify(dataPokemon));
    const {result} = renderHook(() => Pokemon.getMyPokemon(), {wrapper});
    await waitFor(() => expect(result.current.length).toBe(1));
  });

  test('getMyPokemon test empty', async () => {
    Mmkv.removeItem('my-pokemons');
    const {result} = renderHook(() => Pokemon.getMyPokemon(), {wrapper});
    await waitFor(() => expect(result.current.length).toBe(0));
  });
});

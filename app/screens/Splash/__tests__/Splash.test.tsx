import React from 'react';
import ViewModel from '~/screens/Splash/view-model';
import {
  waitFor,
  renderHook,
  render,
  screen,
} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {BerryData} from '@/definitions/usecases/pokemon';
import nock from 'nock';
import {dummyBerries} from '@/__mocks__/constanta.ts';
import {mockReset} from '../../../../jest.setup';
import Splash from '~/screens/Splash';

describe('Splash view-model', () => {
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
      data: dummyBerries,
    }));

  test('viewModel splash check if data is set', async () => {
    const {result} = renderHook(() => ViewModel(), {wrapper});
    await waitFor(() => {
      const {data} = result.current;
      expect((data as BerryData[])[0].name).toBe('cheri');
    });
  });

  test('viewModel splash check if navigated', async () => {
    jest.useFakeTimers();
    renderHook(() => ViewModel(), {wrapper});
    jest.runOnlyPendingTimers();
    await waitFor(() => {
      expect(mockReset.mock.calls.length).toBe(1);
    });
  });

  test('splash screen showed', async () => {
    render(<Splash />, {wrapper});
    await waitFor(() => {
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });
});

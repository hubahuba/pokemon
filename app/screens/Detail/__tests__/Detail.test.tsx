import React from 'react';
import {Root as PopupRootProvider} from 'react-native-popup-confirm-toast';
import {
  waitFor,
  screen,
  render,
  fireEvent,
} from '@testing-library/react-native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import Detail from '~/screens/Detail';

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

  test('Detail screen ', async () => {
    render(<Detail />, {wrapper});
    await waitFor(() => {
      expect(screen.toJSON()).toMatchSnapshot();
    });
  });

  test('Detail screen close button trigger', async () => {
    render(<Detail />, {wrapper});
    const closeButton = screen.getByTestId('DetailBackButton');
    fireEvent.press(closeButton);
    // await waitFor(() => {
    //   expect(screen.toJSON()).toMatchSnapshot();
    // });
  });
});

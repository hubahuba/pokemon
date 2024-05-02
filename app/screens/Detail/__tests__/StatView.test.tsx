import React from 'react';
import StatView from '../StatView';
import {dataPokemon} from '@/__mocks__/constanta.ts';
import {PokemonStat} from '@/definitions/usecases/pokemon';
import {fireEvent, render, waitFor} from '@testing-library/react-native';

const {name, baseWeight, maxWeight, nextEvolution, stats} = dataPokemon[0];

it('renders StatView correctly', () => {
  const tree = render(
    <StatView
      name={name}
      weight={baseWeight}
      maxWeight={maxWeight}
      stats={stats as PokemonStat[]}
      nextEvolution={nextEvolution}
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders StatView with ownedId correctly', () => {
  const tree = render(
    <StatView
      name={name}
      weight={baseWeight}
      maxWeight={maxWeight}
      stats={stats as PokemonStat[]}
      nextEvolution={nextEvolution}
      owned={true}
      ownedId="randomString"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders StatView without maxWeight', () => {
  const tree = render(
    <StatView
      name={name}
      weight={baseWeight}
      stats={stats as PokemonStat[]}
      nextEvolution={nextEvolution}
      owned={true}
      ownedId="randomString"
    />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

test('StatView evolution action test', async () => {
  const mockEvolution = jest.fn();
  const tree = render(
    <StatView
      name={name}
      weight={10}
      maxWeight={10}
      stats={stats as PokemonStat[]}
      nextEvolution={nextEvolution}
      owned={true}
      ownedId="randomString"
      onEvolution={mockEvolution}
    />,
  );
  const {getByTestId} = tree;
  const button = getByTestId('EvolutionButton');
  fireEvent.press(button);
  await waitFor(() => expect(mockEvolution.mock.calls.length).toBe(1));
});

test('StatView delete action test', async () => {
  const mockDelete = jest.fn();
  const tree = render(
    <StatView
      name={name}
      weight={baseWeight}
      maxWeight={maxWeight}
      stats={stats as PokemonStat[]}
      nextEvolution={nextEvolution}
      owned={true}
      ownedId="randomString"
      onDeletePokemon={mockDelete}
    />,
  );
  const {getByTestId} = tree;
  const button = getByTestId('DeletePokemonButton');
  fireEvent.press(button);
  await waitFor(() => expect(mockDelete.mock.calls.length).toBe(1));
});

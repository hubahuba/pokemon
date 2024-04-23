import React from 'react';
import renderer from 'react-test-renderer';
import PokemonList from '../index';
import {PokemonData} from '@/definitions/usecases/pokemon';

it('renders Card correctly', () => {
  const dummyPokemon: PokemonData[] = [
    {
      id: 1,
      name: 'pokemon',
      baseWeight: 10,
      currentWeight: 10,
      maxWeight: 10,
      nextEvolution: [],
      image: 'poke-image',
      order: 1,
      stats: [
        {
          name: 'stat',
          value: 12,
        },
      ],
      evolutions: [],
      lastEat: 'soft',
      owned: false,
    },
  ];

  const tree = renderer.create(<PokemonList data={dummyPokemon} />).toJSON();
  expect(tree).toMatchSnapshot();
});

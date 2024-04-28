import {
  PokeApiQueryQuery,
  PokeGetBerriesQuery,
} from '@/definitions/gql/codegen/graphql.ts';
import {berryDataMapper, pokemonDataMapper} from '@/utils';

export const dummyData: PokeApiQueryQuery = {
  pokemon_v2_pokemon: [
    {
      id: 1,
      name: 'bulbasaur',
      weight: 69,
      pokemon_v2_pokemonsprites: [
        {
          sprites:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
        },
      ],
      pokemon_v2_pokemonstats: [
        {
          base_stat: 45,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'HP',
              },
            ],
          },
        },
        {
          base_stat: 49,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Attack',
              },
            ],
          },
        },
        {
          base_stat: 49,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Defense',
              },
            ],
          },
        },
        {
          base_stat: 65,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Special Attack',
              },
            ],
          },
        },
        {
          base_stat: 65,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Special Defense',
              },
            ],
          },
        },
        {
          base_stat: 45,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Speed',
              },
            ],
          },
        },
      ],
      pokemon_v2_pokemonspecy: {
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              id: 1,
              name: 'bulbasaur',
              order: 1,
              pokemon_v2_pokemons: [
                {
                  weight: 69,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 45,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 49,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 49,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 65,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 65,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 45,
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              name: 'ivysaur',
              order: 2,
              pokemon_v2_pokemons: [
                {
                  weight: 130,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 60,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 62,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 63,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 60,
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              name: 'venusaur',
              order: 3,
              pokemon_v2_pokemons: [
                {
                  weight: 1000,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 82,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 83,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                  ],
                },
                {
                  weight: 1555,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 123,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 122,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 120,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                  ],
                },
                {
                  weight: 10000,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 82,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 83,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

export const dummyNoEvo: PokeApiQueryQuery = {
  pokemon_v2_pokemon: [
    {
      id: 3,
      name: 'venusaur',
      weight: 1000,
      pokemon_v2_pokemonsprites: [
        {
          sprites:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
        },
      ],
      pokemon_v2_pokemonstats: [
        {
          base_stat: 80,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'HP',
              },
            ],
          },
        },
        {
          base_stat: 82,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Attack',
              },
            ],
          },
        },
        {
          base_stat: 83,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Defense',
              },
            ],
          },
        },
        {
          base_stat: 100,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Special Attack',
              },
            ],
          },
        },
        {
          base_stat: 100,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Special Defense',
              },
            ],
          },
        },
        {
          base_stat: 80,
          pokemon_v2_stat: {
            pokemon_v2_statnames: [
              {
                name: 'Speed',
              },
            ],
          },
        },
      ],
      pokemon_v2_pokemonspecy: {
        pokemon_v2_evolutionchain: {
          pokemon_v2_pokemonspecies: [
            {
              id: 1,
              name: 'bulbasaur',
              order: 1,
              pokemon_v2_pokemons: [
                {
                  weight: 69,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 45,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 49,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 49,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 65,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 65,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 45,
                    },
                  ],
                },
              ],
            },
            {
              id: 2,
              name: 'ivysaur',
              order: 2,
              pokemon_v2_pokemons: [
                {
                  weight: 130,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 60,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 62,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 63,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 60,
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              name: 'venusaur',
              order: 3,
              pokemon_v2_pokemons: [
                {
                  weight: 1000,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 82,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 83,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                  ],
                },
                {
                  weight: 1555,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10033.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 123,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 122,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 120,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                  ],
                },
                {
                  weight: 10000,
                  pokemon_v2_pokemonsprites: [
                    {
                      sprites:
                        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10195.png',
                    },
                  ],
                  pokemon_v2_pokemonstats: [
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'HP',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Attack',
                          },
                        ],
                      },
                      base_stat: 82,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Defense',
                          },
                        ],
                      },
                      base_stat: 83,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Attack',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Special Defense',
                          },
                        ],
                      },
                      base_stat: 100,
                    },
                    {
                      pokemon_v2_stat: {
                        pokemon_v2_statnames: [
                          {
                            name: 'Speed',
                          },
                        ],
                      },
                      base_stat: 80,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  ],
};

export const dummyBerries: PokeGetBerriesQuery = {
  pokemon_v2_berry: [
    {
      id: 1,
      name: 'cheri',
      pokemon_v2_berryfirmness: {
        name: 'soft',
      },
      natural_gift_power: 60,
      pokemon_v2_item: {
        pokemon_v2_itemsprites: [
          {
            sprites:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/cheri-berry.png',
          },
        ],
      },
    },
    {
      id: 2,
      name: 'chesto',
      pokemon_v2_berryfirmness: {
        name: 'super-hard',
      },
      natural_gift_power: 60,
      pokemon_v2_item: {
        pokemon_v2_itemsprites: [
          {
            sprites:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/chesto-berry.png',
          },
        ],
      },
    },
  ],
};

export const dataPokemon = pokemonDataMapper(dummyData);
export const dataLastPokemon = pokemonDataMapper(dummyNoEvo);
export const dataBerry = berryDataMapper(dummyBerries);

import {graphql} from '@/definitions/gql/codegen';
import {TypedDocumentNode} from '@graphql-typed-document-node/core';
import {PokeApiQueryQuery} from '@/definitions/gql/codegen/graphql.ts';
import {QuerySearch} from '@/definitions/usecases/pokemon';
export const pokeAPIQueryDocument: TypedDocumentNode<
  PokeApiQueryQuery,
  QuerySearch
> = graphql(/* GraphQL */ `
  query pokeAPIQuery(
    $limit: Int!
    $offset: Int!
    $search: pokemon_v2_pokemon_bool_exp = {}
  ) {
    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $search) {
      id
      name
      weight
      pokemon_v2_pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {
            name
          }
        }
      }
      pokemon_v2_pokemonspecy {
        pokemon_v2_evolutionchain {
          pokemon_v2_pokemonspecies {
            id
            name
            order
            pokemon_v2_pokemons {
              weight
              pokemon_v2_pokemonsprites {
                sprites(path: "other.official-artwork.front_default")
              }
              pokemon_v2_pokemonstats {
                pokemon_v2_stat {
                  pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {
                    name
                  }
                }
                base_stat
              }
            }
          }
        }
      }
    }
  }
`);

/* eslint-disable */
import * as types from './graphql';
import {TypedDocumentNode as DocumentNode} from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query pokeGetBerries {\n    pokemon_v2_berry {\n      id\n      name\n      pokemon_v2_berryfirmness {\n        name\n      }\n      natural_gift_power\n      pokemon_v2_item {\n        pokemon_v2_itemsprites {\n          sprites(path: "default")\n        }\n      }\n    }\n  }\n':
    types.PokeGetBerriesDocument,
  '\n  query pokeAPIQuery(\n    $limit: Int!\n    $offset: Int!\n    $search: pokemon_v2_pokemon_bool_exp = {}\n  ) {\n    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $search) {\n      id\n      name\n      weight\n      pokemon_v2_pokemonsprites {\n        sprites(path: "other.official-artwork.front_default")\n      }\n      pokemon_v2_pokemonstats {\n        base_stat\n        pokemon_v2_stat {\n          pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {\n            name\n          }\n        }\n      }\n      pokemon_v2_pokemonspecy {\n        pokemon_v2_evolutionchain {\n          pokemon_v2_pokemonspecies {\n            id\n            name\n            order\n            pokemon_v2_pokemons {\n              weight\n              pokemon_v2_pokemonsprites {\n                sprites(path: "other.official-artwork.front_default")\n              }\n              pokemon_v2_pokemonstats {\n                pokemon_v2_stat {\n                  pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {\n                    name\n                  }\n                }\n                base_stat\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n':
    types.PokeApiQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query pokeGetBerries {\n    pokemon_v2_berry {\n      id\n      name\n      pokemon_v2_berryfirmness {\n        name\n      }\n      natural_gift_power\n      pokemon_v2_item {\n        pokemon_v2_itemsprites {\n          sprites(path: "default")\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query pokeGetBerries {\n    pokemon_v2_berry {\n      id\n      name\n      pokemon_v2_berryfirmness {\n        name\n      }\n      natural_gift_power\n      pokemon_v2_item {\n        pokemon_v2_itemsprites {\n          sprites(path: "default")\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query pokeAPIQuery(\n    $limit: Int!\n    $offset: Int!\n    $search: pokemon_v2_pokemon_bool_exp = {}\n  ) {\n    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $search) {\n      id\n      name\n      weight\n      pokemon_v2_pokemonsprites {\n        sprites(path: "other.official-artwork.front_default")\n      }\n      pokemon_v2_pokemonstats {\n        base_stat\n        pokemon_v2_stat {\n          pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {\n            name\n          }\n        }\n      }\n      pokemon_v2_pokemonspecy {\n        pokemon_v2_evolutionchain {\n          pokemon_v2_pokemonspecies {\n            id\n            name\n            order\n            pokemon_v2_pokemons {\n              weight\n              pokemon_v2_pokemonsprites {\n                sprites(path: "other.official-artwork.front_default")\n              }\n              pokemon_v2_pokemonstats {\n                pokemon_v2_stat {\n                  pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {\n                    name\n                  }\n                }\n                base_stat\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query pokeAPIQuery(\n    $limit: Int!\n    $offset: Int!\n    $search: pokemon_v2_pokemon_bool_exp = {}\n  ) {\n    pokemon_v2_pokemon(limit: $limit, offset: $offset, where: $search) {\n      id\n      name\n      weight\n      pokemon_v2_pokemonsprites {\n        sprites(path: "other.official-artwork.front_default")\n      }\n      pokemon_v2_pokemonstats {\n        base_stat\n        pokemon_v2_stat {\n          pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {\n            name\n          }\n        }\n      }\n      pokemon_v2_pokemonspecy {\n        pokemon_v2_evolutionchain {\n          pokemon_v2_pokemonspecies {\n            id\n            name\n            order\n            pokemon_v2_pokemons {\n              weight\n              pokemon_v2_pokemonsprites {\n                sprites(path: "other.official-artwork.front_default")\n              }\n              pokemon_v2_pokemonstats {\n                pokemon_v2_stat {\n                  pokemon_v2_statnames(where: {language_id: {_eq: 9}}) {\n                    name\n                  }\n                }\n                base_stat\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;

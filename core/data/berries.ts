import {graphql} from '@/definitions/gql/codegen';

export const PokeGetBerriesQueryDocument = graphql(`
  query pokeGetBerries {
    pokemon_v2_berry {
      id
      name
      pokemon_v2_berryfirmness {
        name
      }
      natural_gift_power
      pokemon_v2_item {
        pokemon_v2_itemsprites {
          sprites(path: "default")
        }
      }
    }
  }
`);

import GameAction from '@/usecases/game-action.ts';
import {dataBerry, dataPokemon} from '@/__mocks__/constanta.ts';
import Mmkv from '@/adapters/mmkv.ts';
import {PokemonData} from '@/definitions/usecases/pokemon';

describe('useCase gameAction', () => {
  test('iChooseYou action', () => {
    GameAction.iChooseYou(dataPokemon[0]);
    const check = Mmkv.getItem('my-pokemons');
    expect(check).toBeDefined();
  });

  test('iChooseYou multiple pokemon', () => {
    GameAction.iChooseYou(dataPokemon[0]);
    let check = Mmkv.getItem('my-pokemons');
    check = JSON.parse(check as string);
    expect(check?.length).toBe(2);
  });

  test('deletePokemon pokemon', () => {
    let check: string | undefined | PokemonData[] = Mmkv.getItem('my-pokemons');
    check = JSON.parse(check as string);
    if (check && typeof check !== 'string' && check.length) {
      // @ts-ignore
      GameAction.deletePokemon(check[0].ownedId);
    }
    let checkAgaint: string | undefined | PokemonData[] =
      Mmkv.getItem('my-pokemons');
    checkAgaint = JSON.parse(checkAgaint as string);
    expect(checkAgaint?.length).toBe(1);
  });

  test('feedPokemon pokemon', () => {
    let check: string | undefined | PokemonData[] = Mmkv.getItem('my-pokemons');
    check = JSON.parse(check as string);
    if (check && typeof check !== 'string' && check.length) {
      const currentPokemonId = check[0].ownedId;
      // @ts-ignore
      GameAction.feedPokemon(currentPokemonId, dataBerry[0]);
    }
    let checkAgaint: string | undefined | PokemonData[] =
      Mmkv.getItem('my-pokemons');
    checkAgaint = JSON.parse(checkAgaint as string);
    expect((checkAgaint as PokemonData[])[0].currentWeight).toBe(
      // @ts-ignore
      (checkAgaint as PokemonData[])[0].baseWeight + 3,
    );
  });

  test('iChooseYou multiple pokemon', () => {
    let check: string | undefined | PokemonData[] = Mmkv.getItem('my-pokemons');
    check = JSON.parse(check as string);
    if (check && typeof check !== 'string' && check.length) {
      const currentPokemonId = check[0].ownedId;
      // @ts-ignore
      GameAction.evolutionPokemon(currentPokemonId);
    }
    let checkAgaint: string | undefined | PokemonData[] =
      Mmkv.getItem('my-pokemons');
    checkAgaint = JSON.parse(checkAgaint as string);
    expect((checkAgaint as PokemonData[])[0].baseWeight).toBe(130);
  });
});

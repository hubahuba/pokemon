import {
  capitalize,
  evolutionMapper,
  filterMapper,
  findNextWeight,
  getBerryScore,
  statMapper,
} from '@/utils';
import {PokemonData} from '@/definitions/usecases/pokemon';
import {
  dataBerry,
  dataLastPokemon,
  dataPokemon,
  dummyData,
} from '@/__mocks__/constanta.ts';

test('test capitalize', () => {
  let dummyString = 'test string';
  const capitalizeDummy = capitalize(dummyString);
  expect(capitalizeDummy.charAt(0)).toBe(dummyString.charAt(0).toUpperCase());
});

test('test mapped pokemon data', () => {
  expect(dataPokemon).toHaveLength(1);
});

test('test mapped pokemon data object', () => {
  expect(dataPokemon[0]).toHaveProperty('id');
});

test('test mapped pokemon data object', () => {
  expect(dataPokemon[0]).toHaveProperty('name');
});

test('test mapped pokemon data stats', () => {
  const stats = statMapper(
    dummyData.pokemon_v2_pokemon[0].pokemon_v2_pokemonstats,
  );
  expect(stats[0]).toHaveProperty('value');
});

test('test mapped pokemon data evolutions', () => {
  const evolution = evolutionMapper(
    dummyData.pokemon_v2_pokemon[0].pokemon_v2_pokemonspecy
      ?.pokemon_v2_evolutionchain?.pokemon_v2_pokemonspecies || [],
  );
  expect(evolution[0]).toHaveProperty('id');
});

test('test mapped pokemon data next evolutions', () => {
  const evolutions = findNextWeight(
    dataPokemon[0],
    dataPokemon[0].evolutions as PokemonData[],
  );
  expect(evolutions[0]).toMatchObject({id: 2});
});

test('test mapped pokemon data no next evolutions', () => {
  const evolutions = findNextWeight(
    // @ts-ignore
    dataPokemon[0].evolutions[2],
    dataPokemon[0].evolutions as PokemonData[],
  );
  expect(evolutions).not.toHaveLength(1);
});

test('test mapped pokemon data maxWeight = baseWeight', () => {
  expect(dataLastPokemon[0].baseWeight).toEqual(dataLastPokemon[0].maxWeight);
});

test('test mapped pokemon not evolutions', () => {
  const evolutions = findNextWeight(dataLastPokemon[0], []);
  expect(evolutions[0].id).toEqual(dataLastPokemon[0].id);
});

test('test mapped pokemon not found evolutions pokemon', () => {
  const falseDummy: PokemonData = {...dataLastPokemon[0]};
  falseDummy.id = 100;
  const evolutions = findNextWeight(
    falseDummy,
    dataLastPokemon[0].evolutions as PokemonData[],
  );
  expect(evolutions[0].id).toEqual(falseDummy.id);
});

test('test mapped berry data', () => {
  expect(dataBerry).toHaveLength(2);
});

test('test mapped berry data object', () => {
  expect(dataBerry[0]).toHaveProperty('firmness');
});

test('test filter mapper string', () => {
  const filter = filterMapper(0, 1, 'searchText');
  expect(filter.search).toHaveProperty('name');
});

test('test filter mapper number', () => {
  const filter = filterMapper(0, 1, 1);
  expect(filter.search).toHaveProperty('id');
});

test('test filter mapper empty string', () => {
  const filter = filterMapper(0, 1, '');
  expect(JSON.stringify(filter.search)).toBe('{}');
});

test('test berry score object', () => {
  const score = getBerryScore(dataBerry[0], true);
  expect(score).toHaveProperty('score');
});

test('test berry score negative combination', () => {
  const score = getBerryScore(dataBerry[0], true);
  expect(score.score).toEqual(-6);
});

test('test berry score positive combination', () => {
  const score = getBerryScore(dataBerry[0], false);
  expect(score.score).toEqual(3);
});

test('test berry score positive combination', () => {
  const score = getBerryScore(
    {
      id: 1,
      name: 'other',
      image: 'test',
    },
    false,
  );
  expect(score.score).toEqual(1);
});

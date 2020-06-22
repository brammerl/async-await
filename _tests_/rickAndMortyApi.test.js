const { getCharacter, getMany } = require('../rickAndMortyApi');

describe('rick and morty api tests', () => {
  it('can get a character by id', async() => {
    const character = await getCharacter(1);
    expect(character).toEqual({
      name: 'Rick Sanchez',
      species: 'Human',
      gender: 'Male'
    });
  });

  it('ges many characters by id', async() => {
    const arr = [1, 2, 3];

    const results = await getMany(arr);

    expect(results).toEqual([{ gender: 'Male', name: 'Rick Sanchez', species: 'Human' }, { gender: 'Male', name: 'Morty Smith', species: 'Human' }, { gender: 'Female', name: 'Summer Smith', species: 'Human' }]);
  });
});

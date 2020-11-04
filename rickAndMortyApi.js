const request = require('superagent');

const getCharacter = async(id) => {
  const character = await request
    .get(`https://rickandmortyapi.com/api/character/${id}`);
  const body = character.body;

  return {
    name: body.name,
    species: body.species,
    gender: body.gender
  };
};

const getMany = async(arr) => {
  const promises = [];  
  
  await arr.forEach(id => {
    promises.push(getCharacter(id));
  });
  return Promise.all(promises);
};

module.exports = {
  getCharacter,
  getMany
};

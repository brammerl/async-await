const Movie = require('../lib/models/Movie');
const Review = require('../lib/models/Review');
const chance = require('chance').Chance();

const seed = async(input) => {
  if(!input){
    const arr = await Promise.all([...Array(5)].map(()=> {
      return Movie.create({
        title: chance.word({ length: 7 }),
        description: chance.sentence({ words: 20 }),
        studio: chance.word({ length: 10 })
      });
    }));

    await Promise.all([...Array(100)].map(() => {
      return Review.create({
        movie: chance.pickone(arr).id,
        authorName: chance.name(),
        comment: chance.sentence({ words: 10 })
      });
    }));
  }
  else {
    const arr = await Promise.all([...Array(input.movieCount)].map(() => {
      return Movie.create({
        title: chance.word({ length: 7 }),
        description: chance.sentence({ words: 20 }),
        studio: chance.word({ length: 10 })
      });
    }));

    await Promise.all([...Array(input.reviewCount)].map(() => {
      return Review.create({
        movie: chance.pickone(arr).id,
        authorName: chance.name(),
        comment: chance.sentence({ words: 10 })
      });
    }));
  }
};

module.exports = seed;

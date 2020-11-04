const  { MongoMemoryServer }  = require('mongodb-memory-server');
const mongod = new MongoMemoryServer();
const mongoose = require('mongoose');
const connect = require('../lib/utils/connect');
const  seed  = require('../data-helpers/seed');
const Movie = require('../lib/models/Movie');
const Review = require('../lib/models/Review');

describe('seed function test', () => {
  beforeAll(async() => {
    const uri = await mongod.getUri();
    return connect(uri);
  });

  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });

  afterAll(async() => {
    await mongoose.connection.close();
    return mongod.stop();
  });

  it('creates 5 movies', async() => {
    await seed();
    const result = await Movie.find();
    expect(result).toHaveLength(5);
  });
  it('creates 100 reviews for a movie', async() => {
    await seed();
    const result = await Review.find();
    expect(result).toHaveLength(100);
  });

  it('creates 10 movies', async() => {
    await seed({ movieCount: 10 });

    const result = await Movie.find();
    expect(result).toHaveLength(10);
  });

  it('creates 3 reviews', async() => {
    await seed({ reviewCount: 3 });

    const result = await Review.find();
    expect(result).toHaveLength(3);
  });
});

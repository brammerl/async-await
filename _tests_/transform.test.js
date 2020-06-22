const fs = require('fs').promises;
const { transform } = require('../transform');

describe('read functions', () => {
  beforeAll(() => {
    return fs.writeFile('./transform.txt', 'Test File');
  });

  afterAll(() => {
    return Promise.all([
      fs.unlink('./transform.txt')
    ]);
  });

  it('transforms text', async() => {
    const content = await transform('./transform.txt');

    await fs.writeFile('./transformed.txt', content);

    const transformedRead = await fs.readFile('./transformed.txt', { encoding: 'utf8' });

    expect(transformedRead).toEqual('ELI TSE');
  });
});

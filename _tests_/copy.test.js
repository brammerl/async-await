const fs = require('fs').promises;
const { copy } = require('../copy');

describe('read functions', () => {
  beforeAll(() => {
    return fs.writeFile('./copy.txt', 'test statement');
  });

  afterAll(() => {
    Promise.all([
      fs.unlink('./copy.txt'),
      fs.unlink('./copy-test.txt')
    ]);
  });

  it('copies the content of a file', async() => {
    await copy('./copy.txt', './copy-test.txt');
    const copiedFile = await fs.readFile('./copy-test.txt', { encoding: 'utf8' });
    expect(copiedFile).toEqual('test statement');
  });
});


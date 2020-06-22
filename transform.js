
const fs = require('fs').promises;

const transform = async(src) => {
  const readFile = await fs.readFile(src, { encoding: 'utf8' });

  const noCap = await readFile.replace(/[A-Z]/g, '');
  const uppercase = await noCap.toUpperCase();
  return await uppercase.split('').reverse().join('');
};

module.exports = {
  transform
};

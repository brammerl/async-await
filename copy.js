const fs = require('fs').promises;

const copy = async(src, destination) => {
  const readFile = await fs.readFile(src, { encoding: 'utf8' });
  await fs.writeFile(destination, readFile);
  
};

module.exports = {
  copy
};

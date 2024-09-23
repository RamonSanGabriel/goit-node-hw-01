import fs from 'fs/promises';

const writeFile = async () => {
  try {
    await fs.unlink('readmeRename.txt');
    console.log('File deleted');
  } catch (error) {
    console.log(error);
  }
};

writeFile();

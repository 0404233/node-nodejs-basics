import { writeFile, access } from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    try {
        await access(`${__dirname}//files//fresh.txt`);
        console.log('FS operation failed');
    } catch (err) {
        await writeFile(`${__dirname}//files//fresh.txt`, 'I am fresh and young');
        console.log('File created');
    }
};

await create();
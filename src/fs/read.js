import { promises as fs } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname, 'files', 'fileToRead.txt');

    try {
        const content = await fs.readFile(file, 'utf8');
        console.log(content);
    } catch (err) {
        console.error('FS operation failed');
    }
};

await read();
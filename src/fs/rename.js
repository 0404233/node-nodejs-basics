import { promises as fs, access } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const rename = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const file = join(__dirname, 'files');
    try {
        await fs.rename(`${file}\\wrongFilename.txt`, `${file}\\properFilename.md`);
        console.log('File renamed successfully');

    } catch (err) {
        console.error('FS operation failed');
    }
};

await rename();
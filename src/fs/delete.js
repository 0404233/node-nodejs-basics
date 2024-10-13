import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    try {
        await fs.unlink(join(__dirname, 'files', 'fileToRemove.txt'));
        console.log('File deleted');
    } catch (err) {
        console.error('FS operation failed');
    }
};

await remove();
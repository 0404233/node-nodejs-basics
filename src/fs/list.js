import { promises as fs } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const list = async () => {
    
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    try {
        const files = await fs.readdir(__dirname);

        files.forEach(file => {
            console.log(file);
        });
    } catch (err) {
        console.error('FS operation failed');
    }
};

await list();
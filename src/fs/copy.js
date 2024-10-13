import { access, cp } from 'fs/promises';
import { constants } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

    try {
        try {
            await access('./files_copy', constants.F_OK);
            console.log('FS operation failed');
          } catch (err) {
            await cp(`${__dirname}\\files`, `${__dirname}\\files_copy`, { recursive: true });
            console.log('Folder copied');
          }
      } catch (err) {
        console.error('FS operation failed');
      } 
};

await copy();

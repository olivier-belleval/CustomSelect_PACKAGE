import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcPath = fileURLToPath(new URL('src/styles/CustomSelect.css', `file://${__dirname}/`));
const destPath = fileURLToPath(new URL('dist/styles/CustomSelect.css', `file://${__dirname}/`));

// Create dist/styles folder if it does not exist
await fs.mkdir(dirname(destPath), { recursive: true });

// Copy the CSS file to the dist/styles folder
await fs.copyFile(srcPath, destPath);

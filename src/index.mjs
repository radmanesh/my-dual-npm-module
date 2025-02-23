// src/index.mjs
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { testFunction } from './utils.mjs';

// A small trick to read from package.json, if you need it
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJson = JSON.parse(
  readFileSync(join(__dirname, '../package.json'), 'utf-8')
);

export { testFunction };

// A sample function to demonstrate an ES module
export function greetESM(name) {
  return `Hello from ESM, ${name}! (Version: ${packageJson.version})`;
}
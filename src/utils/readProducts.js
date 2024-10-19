import { readFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProducts = async () => {
  return JSON.parse(await readFile(PATH_DB, 'utf-8'));
};

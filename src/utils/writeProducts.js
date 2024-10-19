import { writeFile } from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProducts = async (products) => {
  return await writeFile(PATH_DB, JSON.stringify(products, null, 2));
};

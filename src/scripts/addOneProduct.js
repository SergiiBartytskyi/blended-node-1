import { createFakeProduct } from '../utils/createFakeProducts.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const addOneProduct = async () => {
  const my_data = await readProducts();
  const newProduct = createFakeProduct();
  return await writeProducts([...my_data, newProduct]);
};

addOneProduct();

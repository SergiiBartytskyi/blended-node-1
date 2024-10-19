import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';

const generateProducts = async (products) => {
  const my_data = await readProducts();
  const newProducts = Array(products).fill(0).map(createFakeProduct);
  await writeProducts([...my_data, ...newProducts]);
};

generateProducts(5);

import { readProducts } from '../utils/readProducts.js';

const countProducts = async () => {
  const my_data = await readProducts();
  return my_data.length;
};

console.log('countProducts :>> ', await countProducts());

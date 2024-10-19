import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

const removeRandomProduct = async () => {
  const my_data = await readProducts();
  const randomProduct = Math.floor(Math.random * my_data.length);
  my_data.splice(randomProduct, 1);
  await writeProducts(my_data);
};

removeRandomProduct();

import { readProducts } from '../utils/readProducts.js';

const getAllProducts = async () => await readProducts();

console.log('getAllProducts() :>> ', await getAllProducts());

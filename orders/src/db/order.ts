import db from "./initConnection";

import { Product } from "../entities/Order";

const productRepository = db.getRepository(Product);

async function getProductById(productId: number) {
  return await productRepository.findOne(productId);
}
export default {
  getAllProduct: async () => {
    await productRepository.find();
  },
  createNewProduct: async (productData: any) => {
    await productRepository.create(productData);
    const result = await productRepository.save();
    return result;
  },
  getProductById,
  editProduct: async function (productId: number, newData: any) {
    const product = await getProductById(productId);
    productRepository.merge(product, newData);
    const result = await productRepository.save(product);
    return result;
  },
  delete: async (productId: number) => {
    await productRepository.delete(productId);
  },
  likeProduct: async (productId: number) => {
    const product = await getProductById(productId);
    product.likes++;
    return productRepository.save(product);
  },
};

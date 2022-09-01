import db from "./initConnection";

import { Product } from "../entities/Product";

const productRepository = db.getRepository(Product);

export default {
  getAllProduct: async () => {
    await productRepository.find();
  },
  createNewProduct: async (productData: any) => {
    await productRepository.create(productData);
    const result = await productRepository.save();
    return result;
  },
  getProductById: async (productId: number) => {
    return await productRepository.findOne(productId);
  },
};

import db from "./initConnection";

import { Product } from "../entities/Product";

export default {
  getAllProduct: async () => {
    await db.getRepository(Product).find();
  },
  createNewProduct: async (productData: any) => {
    await db.getRepository(Product).create(productData);
    const result = await db.getRepository(Product).save();
    return result;
  },
};

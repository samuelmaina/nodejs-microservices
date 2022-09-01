import db from "./initConnection";

import { Product } from "../entities/Product";

export default {
  getAllProduct: async () => {
    await db.getRepository(Product).find();
  },
};

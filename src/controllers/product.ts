import { NextFunction, Request, Response } from "express";
import product from "../db/product";

export default {
  getProducts: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await product.getAllProduct();
      res.status(201).json(products);
    } catch (error) {
      next(error);
    }
  },
};

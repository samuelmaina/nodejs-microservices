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
  postProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productData = req.body;
      const newProduct = product.createNewProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  },

  getProductById: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prodId = Number(req.params.id);
      const fetched = product.getProductById(prodId);
      res.status(201).json(fetched);
    } catch (error) {
      next(error);
    }
  },

  editProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prodId = Number(req.params.id);
      const newData = req.body;
      const updated = await product.editProduct(prodId, newData);
      res.status(201).json(updated);
    } catch (error) {
      next(error);
    }
  },
};

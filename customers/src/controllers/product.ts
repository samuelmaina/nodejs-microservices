import { NextFunction, Request, Response } from "express";
import product from "../db/customer";

export default {
  createNew: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const products = await product.getAllProduct();
      res.status(201).json(products);
    } catch (error) {
      next(error);
    }
  },
  updateData: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const productData = req.body;
      const newProduct = product.createNewProduct(productData);
      res.status(201).json(newProduct);
    } catch (error) {
      next(error);
    }
  },

  addPayment: async (req: Request, res: Response, next: NextFunction) => {
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

  deleteProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prodId = Number(req.params.id);
      await product.delete(prodId);
      res.status(201).json({ message: "Product deleted successfully." });
    } catch (error) {
      next(error);
    }
  },

  likeProduct: async (req: Request, res: Response, next: NextFunction) => {
    try {
      const prodId = Number(req.params.id);
      const result = await product.likeProduct(prodId);
      res.status(201).json({ message: "Liked added successfully." });
    } catch (error) {
      next(error);
    }
  },
};

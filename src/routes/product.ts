import express from "express";
import product from "../controllers/product";

const router = express.Router();

router.route("/products").get(product.getProducts);

export default router;

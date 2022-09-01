import express from "express";
import product from "../controllers/product";

const router = express.Router();

router.route("/products").get(product.getProducts);
router.route("/product").post(product.postProduct);
router
  .route("/product/:id")
  .get(product.getProductById)
  .put(product.editProduct);

export default router;

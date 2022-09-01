import express from "express";
import product from "../controllers/product";

const router = express.Router();

router.route("/products").get(product.getProducts);
router.route("/product").post(product.postProduct);
router
  .route("/product/:id")
  .get(product.getProductById)
  .put(product.editProduct)
  .delete(product.deleteProduct);

router.route("/product/:id/like").post(product.likeProduct);

export default router;

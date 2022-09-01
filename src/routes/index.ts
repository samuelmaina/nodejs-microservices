import product from "./product";
import express from "express";

const router = express.Router();

router.use("product", product);

export default router;

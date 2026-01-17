import { Router } from "express";
import * as productController from "../controllers/prouctController";
import { requireAuth } from "@clerk/express";

const router = Router();
// Get /api/products => Get all products (public)
router.get("/", productController.getAllProducts);

// Get /api/products => Get current user's products (protected)
router.get("/my", requireAuth(),productController.getMyProducts);

// Get /api/products/:id => Get single product (public)
router.get("/:id",  productController.getProductById);

// POST /api/products => Create new product (protected)
router.post("/", requireAuth(), productController.createProduct);

// PUT /api/products/:id => update product (protected - owner only)
router.put("/:id", requireAuth(), productController.updateProduct);

// DELETE /api/products/:id => delete product (protected - owner only)
router.delete("/:id", requireAuth(), productController.deleteProduct);

export default router;
import { Router } from "express";
import { requireAuth } from "@clerk/express";
import * as commentController from "../controllers/commentController";

const router = Router();

// POST /api/comments/:productId - 
router.post("/:productId", requireAuth(), commentController.createComment);

// DELETE /api/comments/commentId - delete
router.delete("/:commnetId", requireAuth(), commentController.deleteComment);

export default router;
import { Router } from "express";
import { syncUser } from "../controllers/userController";
import { requireAuth } from "@clerk/express";

const router = Router();

// POST => /api/users/sync - sync the clerk user to DB (PROTECTED) 
router.post("/sync", requireAuth(), syncUser);

export default router;

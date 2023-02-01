import express from "express";
const router = express.Router();
import {
  authUser,
  registerUser,
  getUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

router.route("/").post(registerUser); //This format is my default POST route.
router.post("/login", authUser);

router.route("/profile").get(protect, getUserProfile); //This format is my default GET route.

export default router;

import { Router } from "express";
import { registerUser, loginUser, logoutUser } from "../controllers/user.controllers.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT, logoutUser);

export default router;
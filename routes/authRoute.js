import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgetPasswordController,
} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD (POST)
router.post("/register", registerController);

// LOGIN || METHOD (POST)
router.post("/login", loginController);

// FORGOT PASSWORD || METHOD (POST)
router.post("/forgot-password", forgetPasswordController);

// USER-AUTH || METHOD (GET) {PROTECTED ROUTE}
router.get("/user-auth", requireSignin, (req, res) => {
  res.status(200).send({ ok: true });
});

// ADMIN-AUTH || METHOD (GET) {PROTECTED ROUTE}
router.get("/admin-auth", requireSignin, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// test route
router.get("/test", requireSignin, isAdmin, testController);

export default router;

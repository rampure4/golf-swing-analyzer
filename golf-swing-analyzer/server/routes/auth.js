// routes/auth.js
import express from "express";
import { authLogin, authRegister } from "../controllers/authController.js";

export const authRoutes = () => {
  const router = express.Router();

  router.post("/login", authLogin);
  router.post("/register", authRegister);

  return router;
};

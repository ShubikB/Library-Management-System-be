import express from "express"
import { loginValidator, signupValidaor } from "../middlewares/JoiValidator.js"
import { login, signup } from "../controller/authController.js"
import { getUserByEmail } from "../models/users/UserSchema.js"
import { authenticate, isAdmin } from "../middlewares/authenticate.js"

const router = express.Router()

// login api
router.post("/login", loginValidator, login,  authenticate)

// signup api
router.post("/signup", signupValidaor, signup)

router.get("/authenticate", authenticate, getUserByEmail)

export default router
